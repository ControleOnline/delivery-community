import * as Login from "@controleonline/quasar-login-ui/src/router/routes";
import * as Queues from "@controleonline/quasar-queues-ui/src/router/routes";
import * as Products from "@controleonline/quasar-products-ui/src/router/routes";

const routes = [
  ...Login.routes,
  ...Queues.routes,
  ...Products.routes,
  {
    path: "/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        name: "HomeIndex",
        path: "home",
        component: () =>
          import("@controleonline/quasar-products-ui/src/pages/list.vue"),
      },
    ],
  },
  /*
  {
    path: "*",
    redirect: "/",
  },
  */
];

export default routes;
