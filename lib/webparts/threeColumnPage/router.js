import Vue from 'vue';
import Router from 'vue-router';
import ThreeColumnWithHeader from './views/ThreeColumnWithHeader.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/Home',
            component: ThreeColumnWithHeader
        }
    ]
});
//# sourceMappingURL=router.js.map