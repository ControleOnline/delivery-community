import * as Login from "@controleonline/quasar-login-ui/src/router/routes";
import * as Queues from "@controleonline/quasar-queues-ui/src/router/routes";
import * as Finance from "@controleonline/quasar-financial-ui/src/router/routes"

const routes = [
  ...Login.routes,
  ...Queues.routes,
  ...Finance.routes,
  {
    path: "/",
    component: () => import("@controleonline/quasar-layout-ui/src/layouts/AdminLayout.vue"),
    children: [
      {
        name: "HomeIndex",
        path: "home",
        component: () =>
          import(
            "@controleonline/quasar-queues-ui/src/pages/Hardware/List.vue"
          ),
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
