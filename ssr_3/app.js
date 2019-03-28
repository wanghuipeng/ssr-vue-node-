import Vue from 'vue';
import App from './app.vue';

import {createRouter} from './router.js';

export function createApp(){
    const router = new createRouter();
    const app = new Vue({
        router,
        render:h=>h(App)
    });
    return {app,router};
}
