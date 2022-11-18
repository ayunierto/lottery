import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import ('../components/Home.vue');
const Login = () => import ('../components/auth/Login.vue');
const About = () => import ('../components/About/Index.vue');
const Contact = () => import ('../components/Contact/Index.vue');
const Raffles = () => import ('../components/Raffles/Index.vue');
const Winners = () => import ('../components/Winners/Index.vue');

const routes=[
    { path:'/', name:'home', component: Home},
    { path:'/login', name:'login', component: Login},
    { path:'/about', name:'about', component: About},
    { path:'/contact', name:'contact', component: Contact},
    { path:'/rifas', name:'rifas', component: Raffles},
    { path:'/winners', name:'winners', component: Winners},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;