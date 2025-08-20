#  Проект «Portfolio»
💼 Адаптивное одностраничное SPA-приложение с авторизацией и админ-панелью для заполнения данными. Выпускной проект на курсе "Продвинутая веб-разработке".

Основной стек:
+ Vue.js
+ Pug
+ PostCSS
+ Webpack 4
+ JavaScript

<p align='center'>
<img width="1838" height="900" alt="image" src="https://github.com/user-attachments/assets/81dee03e-9b68-4396-a3f1-6f2665dd4dbe" />
</p>

[**Демо**](https://www.bettercallsergeev.pro/)

[**Демо Admin-панель**](https://www.bettercallsergeev.pro/admin)

## Чтобы развернуть проект необходимо:
> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же
> [последняя версия Yarn](https://yarnpkg.com/ru/docs/install)

```sh
$ git clone git@github.com:sergeev-vn/portfolio-website.git
$ cd ls-portfolio-website
$ yarn
```

## Скрипты package.json:

| Скрипт | Назначение                                                                                   |
| ------ | -------------------------------------------------------------------------------------------- |
| dev    | Запустит webpack-dev-server с _горячей_ заменой модулей                                      |
| build  | Соберет проект для **production** (проект готов к загрузке на сервер)                        |
| reg    | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |

#### Чтобы запустить скрипт:

```sh
$ npm run имя_скрипта
```

##### Либо:

```sh
$ yarn имя_скрипта
```
