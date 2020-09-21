import Vue from 'vue';
import Router from 'vue-router';
//进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//进度条
NProgress.configure({
    easing: 'ease',  // 动画方式
    speed: 500,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
  })
Vue.use(Router);

 const routes = [

        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import('../views/Layout/Home'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import('../views/Dashboard/Dashboard.vue'),
                    meta: { title: '系统首页', requireAuth: false }
                },


                {
                    path: '/401',
                    component: () => import('../views/ErrorPage/401.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/404',
                    component: () => import('../views/ErrorPage/404.vue'),
                    meta: { title: '404' }
                },

            ]
        },
        {
            path: '/login',
            component: () => import('../views/Login/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }

    ];

const router = new Router({
    routes: routes,
    mode: 'history',
});
router.beforeEach((to, from, next) => {
    NProgress.start();
    if (to.meta.requireAuth) {
        // 判断该路由是否需要登录权限
        let key = 'token';
        let result = sessionStorage.getItem(key);
        if (result != null && result != undefined) {
            // 通过vuex state获取当前的token是否存在
            next();
        } else {
            if (result == null || result == undefined) {
                next({
                    path: '/login'

                });
            } else {
                next();
            }
        }
    } else {
        next();
    }
});
router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()
  })
export default router;