import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/main.scss";
import "./assets/font.css";

// 日期插件 dayjs 和 moment一样的api特性
import dayjs from 'dayjs'

Vue.prototype.$dayjs = dayjs

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
