// import { createRouter, createWebHistory } from "vue-router";
// import Home from '../views/Home.vue'
// import MyRent from '../views/MyRent.vue'

// const routes = [
//     { path: "/", name: "home", component: Home },
//     { path: "/myrent", name: "myrent", component: MyRent }

// ]

// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes

// })

// export default router

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
        }
    ]
})

export default router