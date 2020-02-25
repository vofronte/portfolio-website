<template lang="pug">
section.review-block
  .container.review-block__container
    .review-block__header
      h1.title.title--size-small Блок «Отзывы» 
    .review-block__content
      review-add
      .review-block__reviews
        ul.review-blocks__list
          button.block-btn.block.review-block__item
            .block-btn__icon
            .block-btn__text Добавить отзыв
          li.review-block__item
            .review
              .review__header
                .review__avatar
                  .avatar
                    img(src='~images/content/vladimir-sabancev.png' class='avatar__img')
                .review__user-info
                  .review__username Владимир Сабанцев
                  .review__position Преподаватель
              .review__body
                .review__text
                  | Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .review__btns
                  button.btn__edit
                    .btn__edit-text Править
                    svg.block__btn-pencil-icon
                      use(xlink:href="sprite.svg#pencil")
                  button.btn__edit
                    .btn__edit-text Удалить
                    svg.block__btn-remove-icon
                      use(xlink:href="sprite.svg#cross")
</template>

<script>
import { mapActions } from 'vuex';
import { generateStdError } from "../../helpers/errorHandler";
import reviewAdd from '../review-add'
export default {
  components: {
    reviewAdd
  },
  created() {
    this.fetchReviews(); 
  },
  methods: {
    ...mapActions('review', ['fetchReviews']),
  }
};
</script>