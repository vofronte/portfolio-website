import { generateStdError } from "../../helpers/errorHandler";

export default {
  namespaced: true,
  actions: {
    async addSkill({ commit }, skills) {
      try {
        const { data } = await this.$axios.post("/skills", skills);
        commit("addCategories/ADD_SKILL", data, { root: true });
      } catch (error) {
        generateStdError(error);
      }
    },

    async removeSkill({ commit }, skill) {
      try {
        const { data } = await this.$axios.delete(`/skills/${skill.id}`);
        commit("addCategories/REMOVE_SKILL", skill, { root: true });
      } catch (error) {
        generateStdError(error);
      }
    },

    async editSkill({ commit }, editedSkill) {
      try {
        const {
          data: { skill }
        } = await this.$axios.post(`/skills/${editedSkill.id}`, editedSkill);
        commit("addCategories/EDIT_SKILL", skill, { root: true });
      } catch (error) {
        generateStdError(error);
      }
    }
  }
};
