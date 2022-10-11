// This is just an example,
// so you can safely delete all default props below

// This is just an example,
// so you can safely delete all default props below

import * as Common from "@controleonline/quasar-common-ui/src/i18n/pt-br/index";
import * as Financial from "@controleonline/quasar-financial-ui/src/i18n/pt-br/index";
import * as Login from "@controleonline/quasar-login-ui/src/i18n/pt-br/index";
import * as People from "@controleonline/quasar-people-ui/src/i18n/pt-br/index";

export default {
  app: {
    name: "Controle Online",
  },
  ...People.translate,
  ...Common.translate,
  ...Financial.translate,
  ...Login.translate,
};
