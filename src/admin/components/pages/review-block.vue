<template lang="pug">
section.review-block
  .container.review-block__container
    .review-block__header
      h1.title.title--size-small Блок «Отзывы» 
    .review-block__content
      review-add

      ul.review-blocks__list
        button.block-btn.block.review-block__item
          .block-btn__icon
          .block-btn__text Добавить отзыв
        li.review-block__item(v-for='review in reviews' :key='review.id')
          review-item(
            :review='review'
          )
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import { generateStdError } from "../../helpers/errorHandler";
import reviewAdd from '../review-add'
import reviewItem from '../review-item'

export default {
  data() {
    return {
      isLoading: false
    }
  },
  components: {
    reviewAdd, reviewItem
  },
  created() {
    this.fetchReviewsData(); 
  },
  computed: {
    ...mapState('review', {
      reviews: (state) => state.reviews,
    })
  },
  methods: {
    ...mapActions('review', ['fetchReviews']),
    ...mapGetters('review', ['getReviews']),
    async fetchReviewsData() {
      this.isLoading = true;
      try {
        await this.fetchReviews();
      } catch (error) {
        this.showTooltip({ type: 'error', text: 'Произошла ошибка при загрузке отзывов', duration: 3000 });
      } finally {
        this.isLoading = false;
      }
    },
  }
};
</script>