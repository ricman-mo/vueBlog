import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from './routes'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Default from "@/layouts/default.vue";
import NoSidebar from "@/layouts/noSidebar.vue";

Vue.component("default-layout", Default);
Vue.component("no-sidebar-layout", NoSidebar);

Vue.config.productionTip = false

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')