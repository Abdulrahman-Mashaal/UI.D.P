import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/layouts/Default.vue"),
        redirect: '/home',
        children: [
          {
            path: "home",
            name: "Home",
            component: () => import("@/views/Home.vue"),
          },
      ]
      },
  
  {
    path: "/:catchAll(.*)",
    name: "404*",
    component: import(/* webpackChunkName: "error404" */ "@/views/404.vue"),
  },
];

const router = createRouter({
  linkActiveClass: "active",
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
  history: createWebHistory(),
  routes,
});

export default router;
