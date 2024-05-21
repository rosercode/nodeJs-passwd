import HomeView from "@/views/Home.vue";
import DocView from "@/views/Doc.vue";

import Vue from 'vue'
import Router from "vue-router"

Vue.use(Router)

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/doc",
    name: "DocView",
    component: DocView,
  },
];

const routers = new Router({
  mode: 'hash',
  routes: routes,
})


export default routers