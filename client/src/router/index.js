import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        redirect: "/today",
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "today",
        name: "today",
        component: () => import("@/views/today"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "tomorrow",
        name: "tomorrow",
        component: () => import("@/views/tomorrow"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "week",
        name: "week",
        component: () => import("@/views/week"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/project/:pid",
        name: "project",
        component: () => import("@/views/project"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Signup.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let user = store.getters["userModule/getUser"];
  if (to.path !== "/login" && to.meta.requiresAuth) {
    if (user.loggedIn === true) {
      next();
    } else {
      next("/login");
    }
  } else {
    if (!user.loggedIn) {
      next();
    } else {
      next(false);
    }
  }
});
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

//   if (requiresAuth && !store.getters["userModule/getLoginStatus"]) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
