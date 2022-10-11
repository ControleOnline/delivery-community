import * as Login from "@controleonline/quasar-login-ui/src/router/routes";
import * as Financial from "@controleonline/quasar-financial-ui/src/router/routes";
import * as Users from "@controleonline/quasar-users-ui/src/router/routes";

const routes = [
  ...Login.routes,
  ...Financial.routes,
  ...Users.routes,

  {
    path: "/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        name: "HomeIndex",
        path: "home",
        component: () =>
          import("@controleonline/quasar-delivery-ui/src/pages/Delivery/List.vue"),
      },
    ],
  },

  {
    path: "*",
    redirect: "/",
  },
];

export default routes;
