import homePage from '@/views/index';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Addarticle from '@/admin/addArticle';
import contentRoutes from "@/services/common/contentRoutes.service";

const routes = [{
        path: '/',
        name: 'Home',
        meta: {
            layout: "default"
        },
        component: homePage
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: "no-layout"
        },
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            layout: "no-layout"
        },
        component: Register
    },
    {
        path: '/addarticle',
        name: 'addarticle',
        meta: {
            layout: "default"
        },
        component: Addarticle
    },

    ...contentRoutes
];

export default routes;