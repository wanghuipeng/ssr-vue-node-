import Vue from 'vue';

import App from './app.vue';


// new Vue({
//     el:"#app",
//     render:h=>h(App)
//     // data(){
//     //     return {
//     //         msg:"hello vue!!"
//     //     }
//     // }
// });

// export default function createApp(){
//     const app = new Vue({
//         render:h=>h(App)
//     });
//     return { app };
// }

export default function createApp () {
    const app = new Vue({
      // 根实例简单的渲染应用程序组件。
      render: h => h(App)
    })
    return { app }
  }
