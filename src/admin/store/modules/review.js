import { generateStdError } from "../../helpers/errorHandler";

export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {
    SET_REVIEWS: (state, data) => (state.reviews = data),
    ADD_REVIEW: (state, review) => state.reviews.push(review),
    REMOVE_REVIEW: (state, removedReviewId) => {
      state.reviews = state.reviews.filter(review => {
        review.id !== removedReviewId;
      });
    }
  },
  actions: {
    // метод добавления нового ревью
    async addReview({ commit }, review) {
      try {
        const formData = new FormData();

        //загнали в спец формат, кот. можем передовать данные по сети
        Object.keys(review).forEach(key => {
          const value = review[key];
          formData.append(key, value);
        });

        const response = await this.$axios.post("/reviews", formData);
        commit("ADD_REVIEW", response.data);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async fetchReviews({ commit }) {
      // {commit} - метод из store (деструктуризация)
      try {
        const response = await this.$axios.get(`/reviews/272`);
        commit("SET_REVIEWS", response.data.reverse()); // вызовим мутацию и получим ответ в response.data
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async removeReview({commit}, reviewId) {
      try {
        const response = await this.$axios.delete(`/reviews/${reviewId}`);
        commit("REMOVE_REVIEW", reviewId);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    }
  },
  getters: {
    // получить список всех отзывов
    getReviews: state => {
        return state.reviews;
    }
  }
}
