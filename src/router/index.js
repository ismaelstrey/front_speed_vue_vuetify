import Vue from "vue";
import VueRouter from "vue-router";
import Front from "../modules/front/home/router";

Vue.use(VueRouter);

const routes = [...Front];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
