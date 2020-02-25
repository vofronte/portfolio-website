<template lang="pug">
.review-block__reviews
  .review
    .review__header
      .review__avatar
        .avatar
          img(:src='`${baseURL}${review.photo}`' class='avatar__img')
      .review__user-info
        .review__username {{review.author}}
        .review__position {{review.occ}}
    template
      .review__body
        .review__text
          | {{review.text}}
        .review__btns
          button.btn__edit
            .btn__edit-text Править
            svg.block__btn-pencil-icon
              use(xlink:href="sprite.svg#pencil")
          button(
            type='button'
            @click="$emit('delete')"
          ).btn__edit
            .btn__edit-text Удалить
            svg.block__btn-remove-icon
              use(xlink:href="sprite.svg#cross")
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
        baseURL: axios.defaults.baseURL
    }
  },
  props: {
    review: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>