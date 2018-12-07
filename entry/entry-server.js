import { createApp } from "../src/main.js";


export default (context) => {
    return new Promise((resolve, reject) => {
        const app = createApp();
        //更改路由
        app.$router.push(context.url);
        app.$router.onReady(() => {
            const matchedComponents = app.$router.getMatchedComponents();
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }
            Promise.all(matchedComponents.map((item) => {
                if (item.serverRequest) {
                    return item.serverRequest(app.$store)
                }
            })).then(() => {
                console.log(app.$store.state)
                console.log(app);
                resolve(app);
            }).catch(reject)
        }, reject)
    })
}