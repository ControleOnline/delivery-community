import * as Login from "@controleonline/quasar-login-ui/src/router/routes";
import * as Products from "@controleonline/quasar-products-ui/src/router/routes";
import * as Queues from "@controleonline/quasar-queues-ui/src/router/routes";

const routes = [
  ...Login.routes,
  ...Products.routes,
  ...Queues.routes,
  {
    path: "/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        name: "HomeIndex",
        path: "home",
        component: () =>
          import("@controleonline/quasar-dashboard-ui/src/pages/Dashboard.vue"),
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
