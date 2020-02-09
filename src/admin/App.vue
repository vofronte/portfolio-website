<template lang="pug">
.admin
  .admin__panel
    header.header
      .container.header__container
        .header__main-content
          .header__avatar
            .avatar
              img(src='../images/content/my-photo.jpg' class='avatar__img')
          .header__user Владимир Сергеев
          .header__page-name Панель администрирования
        a.header__logout-link Выйти
    nav.nav
      .container.nav__container
        ul.nav-tabs
          li.nav-tabs__item.nav-tabs__item--active
            a.nav-tabs__link Обо мне
          li.nav-tabs__item
            a.nav-tabs__link Работы
          li.nav-tabs__item
            a.nav-tabs__link Отзывы
  .admin__content

    section.about-block
      .container.about-block__container
        .about-block__header
          h1.title.title--size-small Блок «Обо мне»
          .about-block__add-group
            button(type='button').btn-regular
              .btn-regular__icon
                .round-btn
                  svg.round-btn__icon
                    use(xlink:href="sprite.svg#plus")
              .btn-regular__text Добавить группу
        .about-block__blocks
          ul.blocks
            li.blocks__item
              .block
                .block__header
                  .block__name-group
                    input.input-basic(type='text' placeholder='Название новой группы' required)
                  .block__control__btns
                    button(type='button').block__btn.block__btn--tick
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
                        input.input-basic(type='text' placeholder='Новый навык' required).input-basic--border-padding
                      .add-skill__percent
                        input.input-basic(type='number' placeholder='100' value='100' step="1" min="1" max="100" required).input-basic--border-padding.input-basic--padding-percent
                        .add-skill__percent-sign %
                      button.add-skill__btn
                        .round-btn
                          svg.round-btn__icon
                            use(xlink:href="sprite.svg#plus")
            li.blocks__item
              .block
                .block__header
                  .block__name-group
                    input.input-basic(type='text' placeholder='Название новой группы' value='Workflow' readonly='readonly' required)
                  .block__control__btns
                    button(type='button').block__btn.block__btn--pencil
                      svg.block__btn-pencil-icon
                        use(xlink:href="sprite.svg#pencil")
                    button(type='button').block__btn.block__btn--trash
                      svg.block__btn-trash-icon
                        use(xlink:href="sprite.svg#trash")
                .block__content
                  .block__skills
                    table.skills.skills__container
                      tr.skill__row
                        td.skill__name
                          input.input-basic(type='text' placeholder='Название навыка' value='Git' readonly='readonly' required).input-basic__skill
                        td.skill__percent
                          .skill__percent-input
                            input.input-basic(type='number' placeholder='100' value='100' step="1" min="1" max="100" readonly='readonly').input-basic__skill.input-basic__skill--padding
                            .skill__percent-sign %
                        td.skill__controls
                          button(type='button').block__btn.block__btn--pencil
                            svg.block__btn-pencil-icon
                              use(xlink:href="sprite.svg#pencil")
                          button(type='button').block__btn.block__btn--trash
                            svg.block__btn-trash-icon
                              use(xlink:href="sprite.svg#trash")
                      tr.skill__row
                        td.skill__name
                          input.input-basic(type='text' placeholder='Название навыка' value='Terminal' readonly='readonly' required).input-basic__skill
                        td.skill__percent
                          .skill__percent-input
                            input.input-basic(type='number' placeholder='100' value='100' step="1" min="1" max="100" readonly='readonly' required).input-basic__skill.input-basic__skill--padding
                            .skill__percent-sign %
                        td.skill__controls
                          button(type='button').block__btn.block__btn--pencil
                            svg.block__btn-pencil-icon
                              use(xlink:href="sprite.svg#pencil")
                          button(type='button').block__btn.block__btn--trash
                            svg.block__btn-trash-icon
                              use(xlink:href="sprite.svg#trash")
                      tr.skill__row
                        td.skill__name
                          input.input-basic(type='text' placeholder='Название навыка' value='Webpack' readonly='readonly' required).input-basic__skill
                        td.skill__percent
                          .skill__percent-input
                            input.input-basic(type='number' placeholder='100' value='100' step="1" min="1" max="100" readonly='readonly' required).input-basic__skill.input-basic__skill--padding
                            .skill__percent-sign %
                        td.skill__controls
                          button(type='button').block__btn.block__btn--pencil
                            svg.block__btn-pencil-icon
                              use(xlink:href="sprite.svg#pencil")
                          button(type='button').block__btn.block__btn--trash
                            svg.block__btn-trash-icon
                              use(xlink:href="sprite.svg#trash")
                      tr.skill__row
                        td.skill__name
                          input.input-basic(type='text' placeholder='Название навыка' value='Webpack' readonly='readonly' required).input-basic__skill
                        td.skill__percent
                          .skill__percent-input
                            input.input-basic(type='number' placeholder='100' value='100' step="1" min="1" max="100" readonly='readonly' required).input-basic__skill.input-basic__skill--padding
                            .skill__percent-sign %
                        td.skill__controls
                          button(type='button').block__btn.block__btn--pencil
                            svg.block__btn-pencil-icon
                              use(xlink:href="sprite.svg#pencil")
                          button(type='button').block__btn.block__btn--trash
                            svg.block__btn-trash-icon
                              use(xlink:href="sprite.svg#trash")
                  .block__add-skill
                    form.add-skill
                      .add-skill__name
                        input.input-basic(type='text' placeholder='Новый навык' required).input-basic--border-padding
                      .add-skill__percent
                        input.input-basic(type='number' placeholder='100' value='100' step="1" min="1" max="100" required).input-basic--border-padding.input-basic--padding-percent
                        .add-skill__percent-sign %
                      button.add-skill__btn
                        .round-btn
                          svg.round-btn__icon
                            use(xlink:href="sprite.svg#plus")

    section.work-block
      .container.work-block__container
        .work-block__header
          h1.title.title--size-small Блок «Работы»
        .work-block__content
          .work-block__add-work
            .add-work.add-work__container
              .add-work__header
                .title.title--size-smaller Добавление работы
              .add-work__body
                form.add-work__form#add-work__form
                  .add-work__picture
                    .image-upload
                      label.image-upload__placeholder(for="file-input")
                        .image-upload__placeholder-text Перетащите или загрузите для загрузки изображения
                        button.basic-admin-btn(type='button') Загрузить
                        input(type='file' id='file-input' required name='file').image-upload__file
                        .input__error
                  .add-work__info
                    .add-work__info-row
                      label.simple-input
                        .simple-input__label Название
                        input(type='text' required name='name').input-basic.input-basic--padding
                        .input__error
                    .add-work__info-row
                      label.simple-input
                        .simple-input__label Ссылка
                        input(type='text' required name='link').input-basic.input-basic--padding
                        .input__error
                    .add-work__info-row
                      label.simple-textarea
                        .simple-textarea__label Описание
                        textarea(type='text' required name='desc').textarea-basic
                        .textarea__error
                    .add-work__info-row
                      label.simple-input
                        .simple-input__label Добавление тэга
                        input(type='text' required).input-basic.input-basic--padding
                      .tags-input__tags
                    .add-work__info-row
                      .add-work__btns
                        button(type='button').btn-regular__text.btn-regular__text--padding Отмена
                        button(type='button').basic-admin-btn#basic-admin-btn Сохранить
          .work-block__works
            ul.work-blocks__list
              button.block-btn.block.work-block__item
                .block-btn__icon
                .block-btn__text Добавить работу
              li.work-block__item
                .work
                  .work__header
                    .work__img
                      img(src='../images/content/work-1.jpg').work__img-pic
                    .work__tags
                      ul.tags
                        li.tags__item HTML
                        li.tags__item CSS
                        li.tags__item Javascript
                  .work__body
                    .work__name Сайт школы образования
                    .work__desc
                      | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    a(href='http://google.com').work__link http://loftschool.ru
                    .work__btns
                      button.btn__edit
                        .btn__edit-text Править
                        svg.block__btn-pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      button.btn__edit
                        .btn__edit-text Удалить
                        svg.block__btn-remove-icon
                          use(xlink:href="sprite.svg#cross")
                          
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
                  .add-review__picture
                    .add-review__avatar
                      .avatar
                        img(src='../images/content/no-avatar.png' class='avatar__img')
                    button(type='button').btn-regular__text Добавить фото
                  .add-review__info
                    .add-review__info-row.add-review__info-row--flex
                      label.simple-input
                        .simple-input__label Имя автора
                        input(type='text' required).input-basic.input-basic--padding
                      label.simple-input
                        .simple-input__label Титул автора
                        input(type='text' required).input-basic.input-basic--padding
                    .add-review__info-row
                      label.simple-textarea
                        .simple-textarea__label Отзыв
                        textarea(type='text' required).textarea-basic
                    .add-review__info-row
                      .add-review__btns
                        button(type='button').btn-regular__text.btn-regular__text--padding Отмена
                        button(type='button').basic-admin-btn Сохранить
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
                        img(src='../images/content/vladimir-sabancev.png' class='avatar__img')
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


<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/fonts.pcss";
  @import "../styles/layout/base.pcss";
  @import "../styles/admin/**/*.pcss";
  @import "../styles/layout/common.pcss";
</style>
