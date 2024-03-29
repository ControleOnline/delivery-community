import categories from "@controleonline/quasar-common-ui/src/store/categories";
import config from "@controleonline/quasar-common-ui/src/store/config";
import gmaps from "@controleonline/quasar-common-ui/src/store/gmaps";
import menu from "@controleonline/quasar-common-ui/src/store/menu";
import people from "@controleonline/quasar-common-ui/src/store/people";
import profile from "@controleonline/quasar-common-ui/src/store/profile";
import user from "@controleonline/quasar-common-ui/src/store/user";
import users from "@controleonline/quasar-common-ui/src/store/users";
import auth from "@controleonline/quasar-login-ui/src/store/modules/auth";
import hardware from "@controleonline/quasar-queues-ui/src/store/modules/hardware";
import queues from "@controleonline/quasar-queues-ui/src/store/modules/queues";
import pay from "@controleonline/quasar-financial-ui/src/store/modules/invoice/pay";
import receive from "@controleonline/quasar-financial-ui/src/store/modules/invoice/receive"

import products from "@controleonline/quasar-products-ui/src/store/products";

import { store } from "quasar/wrappers";
import { createStore } from "vuex";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth,
      hardware,
      categories,
      menu,
      users,
      gmaps,
      people,
      config,
      profile,
      user,
      products,
      queues,
      pay,
      receive,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
