import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);


export default function createRoute() {
    let router = new Router({
        mode: 'history',
        routes: [
            {
                path: '/home',
                component: require("./component/Home.vue")
            }, {
                path: '/animail',
                component: require("./component/Animail.vue")
            }, {
                path: '/people',
                component: require("./component/People.vue")
            }
        ]
    })
    return router;
}