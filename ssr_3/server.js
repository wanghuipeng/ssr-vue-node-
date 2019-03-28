const Koa = require('koa');
const server = new Koa();

const ClientManifest = require('./dist/vue-ssr-client-manifest.json');
const ServerBunld = require('./dist/vue-ssr-server-bundle.json');

const path = require('path');
const fs = require('fs');

//const { createBundleRenderer } = require('vue-server-renderer');
const { createBundleRenderer } = require('vue-server-renderer');

const template = fs.readFileSync(path.resolve(__dirname,'./template.html'), 'UTF-8');

const renderer = createBundleRenderer(ServerBunld,{
    runInNewContext: false, // 推荐
    template, // （可选）页面模板
    ClientManifest // （可选）客户端构建 manifest
});

// const renderToString = function(context){
//     return new Promise((resolve, reject)=>{
//         renderer.renderToString(context, (err, html)=>{
//             if(err){
//                 reject(err);
//             }
//             resolve(html);
//         });
//     });
// }


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
    // renderer.renderToString({}, (err, html)=>{
    //     console.log(ctx);
    //     ctx.body = html;
    // });
     const context = {
         title: '服务端渲染测试', // {{title}}
         url: ctx.url
      }
    let html = await renderToString(context);
//   let html = ''
//   try {
//     html = await renderToString({})
//   } catch(err) {
//     ctx.throw(500, err)
//   }
   ctx.body = html      
});

server.listen(5000, ()=>{
    console.log('server is start ..........');
})


// const Koa = require('koa')
// const { createBundleRenderer } = require('vue-server-renderer')
// const path = require('path')
// const fs = require('fs')
// const serverBundle = require('./dist/vue-ssr-server-bundle.json')
// const clientManifest = require('./dist/vue-ssr-client-manifest.json')
// const app = new Koa()
// const template = fs.readFileSync(path.resolve(__dirname, './template.html'), 'utf-8')
// const renderer = createBundleRenderer(serverBundle, {
//   basedir: path.resolve(__dirname, './dist'),
//   runInNewContext: false,
//   template,
//   clientManifest
// })

// const renderToString = function (context) {
//   return new Promise((resolve, reject) => {
//     renderer.renderToString(context, (err, html) => {
//       if (err) reject(err)
//       resolve(html)
//     })
//   })
// }

// app.use(async ctx => {
//   console.log(ctx.req.url)
//   if (ctx.req.url === '/favicon.ico' || ctx.req.url === '/robots.txt') {
//     ctx.body = ''
//     return 
//   }
//   // 简单的静态文件处理
//   if (ctx.req.url.indexOf('/dist/') > -1) {
//     const urlpath = ctx.req.url.split('?')[0].slice(1)
//     const filepath = path.resolve(__dirname, './', urlpath)
//     ctx.body = fs.readFileSync(filepath)
//     return
//   }
//   let html = ''
//   try {
//     html = await renderToString({})
//   } catch(err) {
//     ctx.throw(500, err)
//   }
//   ctx.body = html  
// })

// app.listen(5000)
// console.log('Server listening on http://localhost:3000.')
