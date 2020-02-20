import { generateStdError } from "../../helpers/errorHandler";

export default {
  namespaced: true,
  actions: {
    async addReview(store, review) {
      const formData = new FormData();

      //загнали в спец формат, кот. можем передовать данные по сети
      Object.keys(review).forEach(key => {
        const value = review[key];
        formData.append(key, value);
      });

      const response = await this.$axios.post('/reviews', formData);
    }
  }
};
