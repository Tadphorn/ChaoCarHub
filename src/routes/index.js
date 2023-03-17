import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'

const routes = [{
    //Home page
    path: "/",
    name: "home",
    componet: Home
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes

})

export default router