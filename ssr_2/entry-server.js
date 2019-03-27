// import { createApp } from './app.js';

// export default ()=> {
//     const  app = new createApp();
//     return app;
// }

import { createApp } from './app.js'

export default context => {
  const { app } = createApp()
  return app
}
