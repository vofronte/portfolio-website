import { generateStdError } from "../../helpers/errorHandler";

export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, data) => (state.categories = data),
    ADD_CATEGORY: (state, category) => state.categories.push(category),
    REMOVE_CATEGORY: (state, removedCategoryId) => {
      state.categories = state.categories.filter(
        category => category.id !== removedCategoryId
      );
    },
    ADD_SKILL: (state, newSkill) => {
      state.categories = state.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      });
    },
    REMOVE_SKILL: (state, deletedSkill) => {
      const removeSkillInCategory = category => {
        category.skills = category.skills.filter(
          skill => skill.id !== deletedSkill.id
        );
      };

      const findCategory = category => {
        if (category.id === deletedSkill.category) {
          removeSkillInCategory(category);
        }

        return category;
      };

      state.categories = state.categories.map(findCategory);
    },
    EDIT_SKILL: (state, editedSkill) => {
      const editSkillInCategory = category => {
        category.skills = category.skills.map(skill => {
          return skill.id === editedSkill.id ? editedSkill : skill;
        });
      };

      const findCategory = category => {
        if (category.id === editedSkill.category) {
          editSkillInCategory(category);
        }

        return category;
      };

      state.categories = state.categories.map(findCategory);
    },
    EDIT_CATEGORY: (state, editedCategory) => {
      state.categories = state.categories.map(category => category.id !== editedCategory.id ? category : editedCategory)
    },
    
  },
  actions: {
    async addCategory({ commit }, title) {
      try {
        const { data } = await this.$axios.post("/categories", { title });
        commit("ADD_CATEGORY", data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editCategory({commit}, category) {
      try {
        const response = await this.$axios.post(`/categories/${category.id}`, {
          title: category.category
        });
        
        commit('EDIT_CATEGORY', category); 
        return response;
      } catch (error) {
        generateStdError(error);
      }
  },
    async removeSkillsGroup({ commit }, categoryId) {
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`);
        commit("REMOVE_CATEGORY", categoryId);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async fetchCategories({ commit }) {
      try {
        const { data } = await this.$axios.get("/categories/272");
        commit("SET_CATEGORIES", data);
      } catch (error) {}
    }
  },    
  getters: {}
};
