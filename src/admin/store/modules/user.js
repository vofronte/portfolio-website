import { generateStdError } from "../../helpers/errorHandler";

export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => (state.user = user),
    CLEAR_USER: state => (state.user = {})
  },
  getters: {
    userIsLoggedIn: state => {
      const userObj = state.user;
      const userObjectIsEmpty =
        Object.keys(userObj).length === 0 && userObj.constructor === Object;

      return userObjectIsEmpty === false; 
    }
  },
  actions: {
    async loginUser({ commit }, user) {
      try {
        const response = await this.$axios.post("/login", user);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    logout({commit}) {
      commit('CLEAR_USER');
      localStorage.clear();
    }
  }
};