<template lang="pug">
section.review-block
  .container.review-block__container
    .review-block__header
      h1.title.title--size-small Блок «Отзывы» 
    .review-block__content
      .review-block__add-review
        .add-review.add-review__container
          .add-review__header
            .title.title--size-smaller Новый отзыв
          .add-review__body
            form.add-review__form
              .add-review__form-userpic
                label.add-review__form-avatar-upload
                  input(
                    type="file"
                    @change='handleFile'
                  ).add-review__form-file-input
                  .add-review__form-pic
                    .add-review__form-avatar-empty(
                    :class='{filled: renderedPhoto.length}'
                    :style='{backgroundImage: `url(${renderedPhoto})`}'
                    )
                  .add-review__form-addphoto Добавить фото

              .add-review__info
                .add-review__info-row.add-review__info-row--flex
                  label.simple-input
                    .simple-input__label Имя автора
                    input(
                      type='text'
                      v-model='review.author'
                    ).input-basic.input-basic--padding
                  label.simple-input
                    .simple-input__label Титул автора
                    input(
                      type='text'
                      v-model='review.occ'
                    ).input-basic.input-basic--padding
                .add-review__info-row
                  label.simple-textarea
                    .simple-textarea__label Отзыв
                    textarea(
                      type='text'
                      v-model='review.text'
                    ).textarea-basic
                .add-review__info-row
                  .add-review__btns
                    button(type='button').btn-regular__text.btn-regular__text--padding Отмена
                    button(
                      type='button'
                      @click='send'
                      ).basic-admin-btn Сохранить
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
export default {
  data() {
    return {
      renderedPhoto: "",
      review: {
        photo: {},
        author: "",
        occ: "",
        text: ""
      }
    };
  },
  methods: {
    ...mapActions('review', ['addReview']),
    handleFile(e) {
      // забираем файл
      const file = e.target.files[0];
      //ложим в review и выполняем метод
      this.review.photo = file;
      this.renderImageFile(file);
    },
    renderImageFile(file) {
      //читать данные с input
      const reader = new FileReader();
      //вывести в нужный формат
      try {
        reader.readAsDataURL(file);
        //получим результат, когда закончится чтение
        reader.onloadend = () => {
          this.renderedPhoto = reader.result;
        };
      } catch (error) {
        throw new Errow("Ошибка при чтении файла");
      }
    },
    send() {
      this.addReview(this.review)
    }
  }
};
</script>

<style lang="postcss" scoped>
.add-review__form-addphoto {
  text-align: center;
  color: #ff9a00;
  font-weight: 600;
}

.add-review__form-userpic {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
}

.add-review__form-avatar-empty {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #dee4ed;
  position: relative;

  &:before {
    content: "";
    height: 115px;
    width: 85px;
    display: block;
    position: absolute;
    background: svg-load("filled-user.svg", fill=#fff) center center no-repeat;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.filled {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    &:before {
      display: none;
    }
  }
  
}

.add-review__form-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}

.add-review__form-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 27px;
}

</style>
