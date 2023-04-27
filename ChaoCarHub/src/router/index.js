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
        path: '/detailcar/:id',
        name: 'detailcar',
        component: () =>
            import('../views/DetailCar.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        meta: { admin: true },
        component: () =>
            import('../views/Admin.vue')
    },
    {
        path: '/crudcar',
        name: 'crudcar',
        meta: { admin: true },
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
        meta: { admin: true },
        component: () =>
            import('../components/Admin/Table_Car.vue')
    }
    ,
    {
        path: '/tableud',
        name: 'tableud',
        meta: { admin: true },
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
    const isAdmin = !!localStorage.getItem('isAdmin')
    // if not login
    if (to.meta.login && !isLoggedIn) {
        alert('Please login first!');
        next({ path: '/sign_in' });
    }
    // check if user is not logged in or not an admin
    if (to.meta.admin && (!isLoggedIn || !isAdmin)) { 
        alert('You are not authorized to access this page!');
        next({ path: '/' });}

    if (to.meta.guess && isLoggedIn) {
        alert("You've already logged in");
        next({ path: '/myrent' });
    }
 
     next();
   });





export default router;