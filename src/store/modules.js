import auth from '@controleonline/quasar-login-ui/src/store/modules/auth';
import gmaps from "@controleonline/quasar-common-ui/src/store/gmaps";
import people from "@controleonline/quasar-common-ui/src/store/people";
import config from "@controleonline/quasar-common-ui/src/store/config";
import profile from "@controleonline/quasar-common-ui/src/store/profile";
import user from "@controleonline/quasar-common-ui/src/store/user";
import receiveInvoice from "@controleonline/quasar-financial-ui/src/store/modules/invoice/receive";
import comissionInvoice from "@controleonline/quasar-financial-ui/src/store/modules/invoice/comission";
import payInvoice from "@controleonline/quasar-financial-ui/src/store/modules/invoice/pay";
import expense from "@controleonline/quasar-financial-ui/src/store/modules/invoice/expense";
import categories from "@controleonline/quasar-common-ui/src/store/categories";
import menu from "@controleonline/quasar-common-ui/src/store/menu";
import users from "@controleonline/quasar-common-ui/src/store/users";

export const modules = {
  auth,
  gmaps,
  people,
  config,
  profile,
  user,
  receiveInvoice,
  comissionInvoice,
  payInvoice,
  expense,
  categories,
  menu,
  users
};