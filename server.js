const Vue = require("vue");
const exp = require("express");
const renderer = require('vue-server-renderer').createRenderer();
const createApp = require('./dist/bundle.server.js')['default'];





const express = exp();
//模拟一个服务器渲染的接口

express.get("/api/getHomeInfo", (req, res) => {
       res.send("我是服务端渲染请求的数据");
})


//浏览器端的js路径地址
const clientBundleFileUrl = "/bundle.client.js"
//设置静态文件目录
express.use("/", exp.static(__dirname + "/dist"))

//相应路由请求

express.get("*", (req, res) => {
    const context = { url: req.url };
    createApp(context).then((app) => {
        renderer.renderToString(app, (err, html) => {
             console.log(html)
            if (err) {
                return res.state(500).end('运行时出错');
            }
            res.send(`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Vue2.0 SSR渲染页面</title>
                        <script src="${clientBundleFileUrl}"></script>
                    </head>
                    <body>
                         <div id="app">${html}</div>
                    </body>
                </html>
            `)
        })
    }, (err) => {
        if (err.code = '404') {
            res.status(404).end("所请求的页面不存在", 'utf-8');
        }
    })
})

express.listen("8888", () => {
    console.log("服务已经启动")
})