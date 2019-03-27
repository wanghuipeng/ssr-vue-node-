const Koa = require('koa');
const { createBundleRenderer } = require('vue-server-renderer');
const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(path.resolve(__dirname, './template.html'), 'UTF-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const server = new Koa();

const renderer = createBundleRenderer(serverBundle,{
  runInNewContext: false,
  template,
  clientManifest
});

const renderToString = function(context){
    return new Promise((resolve, reject)=>{
        renderer.renderToString(context, (err, html)=>{
            if(err){
                reject(err);
            }
            resolve(html);
        });
    });
}


server.use(async ctx => {
    let html = ''
    try {
      html = await renderToString({})
    } catch(err) {
      ctx.throw(500, err)
    }
    ctx.body = html  
});

server.listen(5000, ()=>{
    console.log('server is start!!!');
})