import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HOME from './page/home.vue';
import LIST from './page/list.vue';
import DETAIL from './page/detaile.vue';

const routes = [{
    path:'/',
    component:HOME
},{
    path:'/home',
    component:HOME
},{
    path:'/list',
    component:LIST
},{
    path:'/detail',
    component:DETAIL
}];

export function createRouter(){
    return new VueRouter({
        mode:'history',
        routes: routes
    });
}



// import Vue from 'vue';
// import Router from 'vue-router';

// Vue.use(Router)
// export default () => {
//   return new Router({
//     mode: 'history',
//     routes: [
//       {
//         path: '/',
//         name: 'main',
//         component: () => import('../views/main')
//       }
//     ]
//   })
// }