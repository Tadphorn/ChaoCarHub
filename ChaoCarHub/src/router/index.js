
// import { createRouter, createWebHistory } from 'vue-router'

// const router = createRouter({
//     history: createWebHistory(
//         import.meta.env.BASE_URL),
//     routes: [{
//             path: '/',
//             name: 'home',
//             component: () =>
//                 import ('../views/Home.vue')
//         },
//         {
//             path: '/myrent',
//             name: 'myrent',
//             component: () =>
//                 import ('../views/MyRent.vue')
//         },
//         {
//             path: '/sign_in',
//             name: 'sign_in',
//             component: () =>
//                 import ('../views/Sign_in.vue')
//         },
//         {
//             path: '/sign_up',
//             name: 'sign_up',
//             component: () =>
//                 import ('../views/Sign_up.vue')
//         },
//         {
//             path: '/admin',
//             name: 'admin',
//             component: () =>
//                 import ('../views/Admin.vue')
//         },
//         {
//             path: '/pay',
//             name: 'pay',
//             component: () =>
//                 import ('../views/Pay.vue')
//         },
//         {
//             path: '/filter_car',
//             name: 'filter_car',
//             component: () =>
//                 import ('../components/Home/Filter_Car.vue')
//         },
//         {
//             path: '/detailcar',
//             name: 'detailcar',
//             component: () =>
//                 import ('../views/DetailCar.vue')
//         },
//         {
//             path: '/admin',
//             name: 'admin',
//             component: () =>
//                 import ('../views/Admin.vue')
//         },
//         {
//             path: '/crudcar',
//             name: 'crudcar',
//             component: () =>
//                 import ('../views/CRUD_Car.vue')
//         },
//         {
//             path: '/showcar',
//             name: 'showcar',
//             component: () =>
//                 import ('../views/ShowCar.vue')
//         }
//         ,
//         {
//             path: '/tablecar',
//             name: 'tablecar',
//             component: () =>
//                 import ('../components/Admin/Table_Car.vue')
//         }
//         ,
//         {
//             path: '/tableud',
//             name: 'tableud',
//             component: () =>
//                 import ('../components/Admin/Table_UpdateDeleteCar.vue')
//         }
//         ,
//         {
//             path: '/tablepayment',
//             name: 'tablepayment',
//             component: () =>
//                 import ('../components/Admin/Table_Pay.vue')
//         }
//     ]
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/myrent',
        name: 'myrent',
        meta: { login: true },
        component: () => import('../views/MyRent.vue')
    },
    {
        path: '/sign_in',
        name: 'sign_in',
        meta: { guess: true },
        component: () =>
            import('../views/Sign_in.vue')
    },
    {
        path: '/sign_up',
        name: 'sign_up',
        meta: { guess: true },
        component: () =>
            import('../views/Sign_up.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () =>
            import('../views/Admin.vue')
    },
    {
        path: '/pay',
        name: 'pay',
        component: () =>
            import('../views/Pay.vue')
    },
    {
        path: '/filter_car',
        name: 'filter_car',
        component: () =>
            import('../components/Home/Filter_Car.vue')
    },
    {
        path: '/detailcar',
        name: 'detailcar',
        component: () =>
            import('../views/DetailCar.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () =>
            import('../views/Admin.vue')
    },
    {
        path: '/crudcar',
        name: 'crudcar',
        component: () =>
            import('../views/CRUD_Car.vue')
    },
    {
        path: '/showcar',
        name: 'showcar',
        component: () =>
            import('../views/ShowCar.vue')
    }
    ,
    {
        path: '/tablecar',
        name: 'tablecar',
        component: () =>
            import('../components/Admin/Table_Car.vue')
    }
    ,
    {
        path: '/tableud',
        name: 'tableud',
        component: () =>
            import('../components/Admin/Table_UpdateDeleteCar.vue')
    }
    ,
    {
        path: '/tablepayment',
        name: 'tablepayment',
        component: () =>
            import('../components/Admin/Table_Pay.vue')
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const isLoggedIn = !!localStorage.getItem('token');
    // if not login
    if (to.meta.login && !isLoggedIn) {
        alert('Please login first!');
        next({ path: '/sign_in' });
    }

    if (to.meta.guess && isLoggedIn) {
        alert("You've already logged in");
        next({ path: '/myrent' });
    }

    next();
});

export default router;