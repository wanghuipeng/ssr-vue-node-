const Koa = require('koa');
const Server = new Koa();

const Vue = require('vue');
const fs = require('fs');
const path = require('path');

const renderer = require('vue-server-renderer').createRenderer({
    template:fs.readFileSync(path.resolve(__dirname,'./template.html'), 'UTF-8')
});


Server.use(async ctx=>{
    
    const context = {
        title:'this first ssr'
    }

    const app = new Vue({
        data:{
            url: ctx.url,
            msg:'simple project of node+vue ssr!'
        },
        template:"<h2>{{msg}}</h2>"
    });

    renderer.renderToString(app, context,(err, html)=>{
        //console.log(html);
        ctx.body = html;
    });

});

Server.listen(5000, ()=>{
    console.log('server is start.......');
});