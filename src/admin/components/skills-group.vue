<template lang="pug">
  .block
    .block__header(v-if='editmode === false')
      .block__name-group 
        input.input-basic(
          type='text'
          placeholder='Название новой группы'
          :value='category.category'
          readonly 
          required)
      .block__control__btns
        button(
          type='button'
          @click='editmode = true'
        ).block__btn.block__btn--pencil
          svg.block__btn-pencil-icon
            use(xlink:href="sprite.svg#pencil")

    .block__header(v-else)
      .block__name-group 
        input.input-basic(
          type='text'
          placeholder='Название новой группы'
          v-model='editedCategory.category'
          required)
      .block__control__btns
        button(
          type='button'
          @click='editExistedCategory'
        ).block__btn.block__btn--tick
          svg.block__btn-tick-icon
            use(xlink:href="sprite.svg#tick")
        button(
          type='button'
          @click='removeCategory'
        ).block__btn.block__btn--remove
          svg.block__btn-remove-icon
              use(xlink:href="sprite.svg#cross")

    .block__content
      .block__skills
        table.skills.skills__container
          tr.skill__row(v-for='skill in category.skills' :key="skill.id")
            skill-row(
              :skill='skill'
            )
      .block__add-skill
        form(
          @submit.prevent='addNewSkill'
          :class="{'add-skill--disabled' : loading}"
        ).add-skill
          .add-skill__name
            input(
              type='text'
              placeholder='Новый навык'
              v-model='skills.title'
              :class="{'valid-error' : validation.hasError('skills.title')}"
            ).input-basic.input-basic--border-padding
            .input__error(
              :class="{'input__error--display' : validation.hasError('skills.title')}"
            ) {{this.validation.firstError('skills.title')}}
          .add-skill__percent
            input(
              type='number'
              v-model='skills.percent'
              placeholder='100'
              value='100'
              step="1" min="1"
              max="100"
              :class="{'valid-error' : validation.hasError('skills.percent')}"
              ).input-basic.input-basic--border-padding.input-basic--padding-percent
            .add-skill__percent-sign %
            .input__error(
              :class="{'input__error--display' : validation.hasError('skills.percent')}"
            ) {{this.validation.firstError('skills.percent')}}
          button(
            type='submit'
            :disabled="loading"
            ).add-skill__btn
            .round-btn
              svg.round-btn__icon
                use(xlink:href="sprite.svg#plus")
</template>

<script>
import { Validator } from "simple-vue-validator";
import { mapActions } from "vuex";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
     "skills.title"(value) {
      return Validator.value(value).required("Заполните навык");
    },
     "skills.percent"(value) {
      return Validator.value(value).required("Заполните уровень навыка");
    }
  },
  components: {
    skillRow: () => import("../components/skill-row")
  },
  data() {
    return {
      loading: false,
      editmode: false,
      editedCategory: { ...this.category },
      skills: {
        title: "",
        percent: 100,
        category: this.category.id
      }
    };
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("addSkills", ["addSkill"]),
    ...mapActions("addCategories", ["removeSkillsGroup", "editCategory"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async editExistedCategory() {
      try {
        await this.editCategory(this.editedCategory);
        this.editmode = false;
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    async addNewSkill() {
      this.loading = true;
      try {
        await this.addSkill(this.skills);
        this.skills.title = "";
        this.skills.percent = "";
      } catch (error) {
        alert(error.message);
      } finally {
        this.loading = false;
      }
    },
    async removeCategory() {
      try {
        const response = await this.removeSkillsGroup(this.category.id);
        this.showTooltip({
          type: "success",
          text: "Категория удалена"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    }
  }
};
</script>
