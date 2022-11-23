import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import ('../components/Home.vue');
const Login = () => import ('../components/Auth/Login.vue');
const About = () => import ('../components/About/Index.vue');
const Contact = () => import ('../components/Contact/Index.vue');
const Raffles = () => import ('../components/Raffles/Index.vue');
const Winners = () => import ('../components/Winners/Index.vue');
const Dashboard = () => import ('../components/Dashboard/Index.vue');
const Register = () => import ('../components/Auth/Register.vue');

const routes = [
    { 
        path:'/', 
        name:'home', 
        component: Home,
        meta: {
            requiresAuth: false
        }
    },
    { 
        path:'/login', 
        name:'login', 
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    { 
        path:'/register', 
        name:'register', 
        component: Register,
        meta: {
            requiresAuth: false
        }
    },
    { 
        path:'/about', 
        name:'about', 
        component: About,
        meta: {
            requiresAuth: false
        }
    },
    { 
        path:'/contact', 
        name:'contact', 
        component: Contact,
        meta: {
            requiresAuth: false
        }
    },
    { 
        path:'/rifas', 
        name:'rifas', 
        component: Raffles,
        meta: {
            requiresAuth: false
        }
    },
    { 
        path:'/winners', 
        name:'winners', 
        component: Winners,
        meta: {
            requiresAuth: false
        }
    },
    { 
        path:'/dashboard', 
        name:'dashboard', 
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

// Seguridad de las rutas
router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !localStorage.getItem('token')) {
        return { name: 'login'}
    }
    // if (to.meta.requiresAuth == false && localStorage.getItem('token')) {
    //     return { name: 'dashboard'}
    // }
})

export default router;