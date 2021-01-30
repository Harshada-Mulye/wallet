import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueTheMask from "vue-the-mask";

Vue.config.productionTip = false;
Vue.use(VueTheMask);
new Vue({
  router,
  data(){
    return{
      cards: [
        {
           "id": "1",
           "holder": "Harshada Mulye",
           "vendor": "bitcoin",
           "number": "1322 2325 2300 7120",
           "validMonth": "8",
           "validYear": "05",
           "bgColor": "#F9B449",
           "textColor": "#2c3e50",
           "img": "bitcoin"
        },
        {
           "id": "2",
           "holder": "Shraddha Mulye",
           "vendor": "evil",
           "number": "5311 1455 6570 2370",
           "validMonth": "6",
           "validYear": "05",
           "bgColor": "#DF2E4C",
           "textColor": "#ECE6DF",
           "img": "evil"
        },
        {
           "id": "3",
           "holder": "Reva Abh",
           "vendor": "blockchain",
           "number": "2450 8315 1200 3870",
           "validMonth": "12",
           "validYear": "05",
           "bgColor": "#7E4EE1",
           "textColor": "#ECE6DF",
           "img": "blockchain"
        },
        {
           "id": "4",
           "holder": "Ganesh Abh",
           "vendor": "ninja",
           "number": "7800 8775 6660 6370",
           "validMonth": "12",
           "validYear": "05",
           "bgColor": "#3A3A3A",
           "textColor": "#ECE6DF",
           "img": "ninja"
        }
      ]
    }
  },
  render: h => h(App)
}).$mount("#app");
