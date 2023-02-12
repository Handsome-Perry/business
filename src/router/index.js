import { createRouter, createWebHistory } from "vue-router";


const routes = [{
    path: '/',
    name: 'login',
    component: () => import("@/components/Login/myLogin.vue"),//登陆
},
{
    path: '/Register',
    name: 'Register',
    component: () => import("@/components/Register/myRegister.vue"), //注册
}, {
    path: '/Homepage',
    name: 'Homepage',
    component: () => import("@/components/homePage/homePage.vue"),//主页
},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router