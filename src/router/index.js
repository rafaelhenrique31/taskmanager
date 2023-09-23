import { createRouter, createMemoryHistory } from "vue-router";
import Home from "../pages/Home/Home.vue";
import CreateTask from "../pages/Task/CreateTask/CreateTask.vue";
const lazyLoad = (view) => import(`../pages/Task/${view}.vue`);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/task/:userId",
    name: "Task",
    component: lazyLoad("Task"),
  },
  {
    path: "/createTask/:userId",
    name: "CreateTask",
    component: CreateTask,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes,
});

export default router;
