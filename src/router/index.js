import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: () => import('@/views/front/components/ProductDetail.vue'),
        props: true
    },
    {
        path: '/login',
        component: () => import('@/views/login/login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        component: () => import('@/views/login/register.vue'),
        meta: {
            title: '注册'
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/front/Home.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/technology',
        name: 'Technology',
        component: () => import('@/views/front/Technology.vue'),
        meta: {
            title: '技术支持'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/front/About.vue'),
        meta: {
            title: '关于我们'
        }
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/admin/Index.vue'),
        meta: {
            title: '后台首页'
        },
        children: [
            {
                path: '/info',
                name: 'Info',
                component: () => import('@/views/admin/Info.vue'),
                meta: {
                    title: '基本信息'
                }
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router

export function resetRouter() {
    router.push({ path: '/login' })
}
