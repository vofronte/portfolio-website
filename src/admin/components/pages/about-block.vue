<template lang="pug">
section.about-block
  .container.about-block__container
    .about-block__header
      h1.title.title--size-small Блок «Обо мне»
      .about-block__add-group
        button(
          type='button'
          v-if="showAddingForm === false"
          @click="showAddingForm = true"
          ).btn-regular
          .btn-regular__icon
            .round-btn
              svg.round-btn__icon
                use(xlink:href="sprite.svg#plus")
          .btn-regular__text Добавить группу
    .about-block__blocks
      ul.blocks
        li.blocks__item(v-if="showAddingForm")
          .block
              .block__header
                .block__name-group
                  input(
                  type='text'
                  placeholder='Название новой группы'
                  v-model='title'
                  @keydown.enter='addNewCategory'
                  required
                  ).input-basic
                .block__control__btns
                  button(
                    type='button'
                    @click='addNewCategory'
                  ).block__btn.block__btn--tick
                    svg.block__btn-tick-icon
                      use(xlink:href="sprite.svg#tick")
                  button(type='button').block__btn.block__btn--remove
                    svg.block__btn-remove-icon
                        use(xlink:href="sprite.svg#cross")
              .block__content
                .block__skills
                .block__add-skill
                  form.add-skill.add-skill--disabled
                    .add-skill__name
                      input.input-basic(
                      type='text'
                      placeholder='Новый навык'
                      required
                    ).input-basic--border-padding
                    .add-skill__percent
                      input.input-basic(
                        type='number'
                        placeholder='100'
                        value='100'
                        step="1"
                        min="1"
                        max="100"
                        required
                      ).input-basic--border-padding.input-basic--padding-percent
                      .add-skill__percent-sign %
                    button.add-skill__btn
                      .round-btn
                        svg.round-btn__icon
                          use(xlink:href="sprite.svg#plus")
        li.blocks__item(v-for="category in categories" :key='category.id')
          skills-group(
            :category="category"
          )

</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    skillsGroup: () => import('../skills-group')
  },
    computed: {
    ...mapState('addCategories', {
      categories: state => state.categories
    })
  },
  data() {
    return {
      title: '',
      showAddingForm: false
    }
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions('addCategories', ['addCategory', 'fetchCategories']),
    async addNewCategory() {
      try {
        await this.addCategory(this.title);
      }
      catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>