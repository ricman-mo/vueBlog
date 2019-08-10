import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from './routes'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Default from "@/layouts/default.vue";
import NoSidebar from "@/layouts/noSidebar.vue";
import NoLayouts from "@/layouts/nolayouts.vue";
import axios from 'axios';
import QS from 'qs'
import VueLodash from 'vue-lodash'
import VueCookies from 'vue-cookies'
import vueLodashMin from 'vue-lodash';
import StorageService from "@/services/common/storage.service";
import BootstrapVue from 'bootstrap-vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// use


const options = { name: 'lodash' } // customize the way you want to call it
Vue.use(VueLodash, options) // options is optional
Vue.use(VueCookies)
Vue.use(mavonEditor)
axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.baseURL = ''; //配置接口地址

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.component("default-layout", Default);
Vue.component("no-sidebar-layout", NoSidebar);
Vue.component("no-layout-layout", NoLayouts);

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(VueRouter);


// Configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

// Vue.prototype.$axios = axios; //全局注册，使用方法为:this.$axios
// Vue.prototype.qs = QS; ////全局注册，使用方法为:this.qs

// Add a request interceptor
axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    StorageService.getCurrentUser().then((user) => {
        console.log(user);
        if (user.token) {
            config.headers['Authorization'] = `token ${ user.token }`
        }
    })
    return config
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function(response) {
    // Do something with response data
    if (!response.data.success) {
        return Promise.resolve(response);
    }
    return response;
}, function(error) {
    if (error.response.status === 401) {
        router.push('Login')
    }
    return Promise.reject(error);
});

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')