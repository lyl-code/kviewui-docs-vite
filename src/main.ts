// import { createApp } from 'vue'
import routes from 'pages-generated' // vite-plugin-pages 生成的路由信息
// import { createRouter, createWebHistory } from 'vue-router'
import { ViteSSG } from 'vite-ssg';
import '@/assets/styles/style.css';
// import '@/assets/styles/reset.scss';
import '@/assets/styles/md-style.scss';
import App from './App.vue'

// createApp(App).mount('#app')
// const app = createApp(App);
// app.use(
//     createRouter({
//         history: createWebHistory(),
//         routes,
//     })
// );

// app.mount('#app');
export const createApp = ViteSSG(App, { routes });
