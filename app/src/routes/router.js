import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import menu from "../vuex/modules/menu";
console.log(menu);

const routerPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

  return routerPush.call(this, location).catch(error => error)

}
const {
  items: routes
} = menu;

const router = new VueRouter({
  routes
});


export default router;
