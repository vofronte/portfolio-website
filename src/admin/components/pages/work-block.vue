<template lang="pug">
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
                  img(src='~images/content/work-1.jpg').work__img-pic
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
</template>