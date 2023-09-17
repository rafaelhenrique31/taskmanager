import { createRouter, createMemoryHistory } from "vue-router";
import Home from '../pages/Home/Home.vue'

const lazyLoad = (view) => import(`../pages/Task/${view}.vue`)

const routes = [
    {
        path: "/",
        name: 'Home',
        component:Home,
    },
    {
        path: "/task",
        name: 'Task',
        component: lazyLoad("Task"),
    },
]

const router = createRouter({
    history :createMemoryHistory(),
    routes : routes
})

export default router;