import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import addSkills from "./modules/addSkills";
import addCategories from "./modules/addCategories";
import user from "./modules/user";
import tooltips from "./modules/tooltips";
import review from "./modules/review";

export default new Vuex.Store({
  modules: {
    addSkills,
    addCategories,
    user,
    tooltips,
    review
  }
});
