
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('../views/Home.vue')
        },
        {
            path: '/myrent',
            name: 'myrent',
            component: () =>
                import ('../views/MyRent.vue')
        },
        {
            path: '/sign_in',
            name: 'sign_in',
            component: () =>
                import ('../views/Sign_in.vue')
        },
        {
            path: '/sign_up',
            name: 'sign_up',
            component: () =>
                import ('../views/Sign_up.vue')
        },
        {
            path: '/admin',
            name: 'admin',
            component: () =>
                import ('../views/Admin.vue')
        },
        {
            path: '/pay',
            name: 'pay',
            component: () =>
                import ('../views/Pay.vue')
        },
        {
            path: '/filter_car',
            name: 'filter_car',
            component: () =>
                import ('../components/Home/Filter_Car.vue')
        },
        {
            path: '/detailcar',
            name: 'detailcar',
            component: () =>
                import ('../views/DetailCar.vue')
        },
        {
            path: '/admin',
            name: 'admin',
            component: () =>
                import ('../views/Admin.vue')
        },
        {
            path: '/tablecar',
            name: 'tablecar',
            component: () =>
                import ('../components/Admin/Table_Car.vue')
        }
    ]
})

export default router