import Vue from "vue";
import VueRouter from "vue-router";
import Choice from "../views/Choice.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Choice",
    component: Choice,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
