import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('@/views/Home.vue'),
    redirect: { name: 'index' },
    meta: { title: '首页', backgroundType: '1' },
    children: [
      {
        path: '/index',
        component: () => import('@/views/page/home/home.vue'),
        name: 'index',
        meta: { title: '首页', backgroundType: '2' },
      },
      {
        path: '/about',
        component: () => import('@/views/page/about/about.vue'),
        name: 'about',
        meta: { title: '关于', backgroundType: '2' },
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  next()
})

export default router;
