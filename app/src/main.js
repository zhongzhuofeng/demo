import Vue from "vue";
import App from "./App";
import "lib-flexible/flexible";
import './assets/css/index.less'
import store from "./vuex";
import router from "./routes/router";
import Vant from 'vant';
import 'vant/lib/index.css';
import filter from './filters'
filter()

Vue.use(Vant);
/* eslint-disable no-new */
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
