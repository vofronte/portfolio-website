<template lang="pug">
.admin
  template(v-if="userIsLoggedIn")
    .admin__panel
      header.header
        .container.header__container
          .header__main-content
            .header__avatar
              .avatar
                img(src='../images/content/my-photo.jpg' class='avatar__img')
            .header__user Владимир Сергеев
            .header__page-name Панель администрирования
          a.header__logout-link(@click='logoutUser') Выйти
      nav.nav
        .container.nav__container
          ul.nav-tabs
            li.nav-tabs__item(v-for="tab in tabs")
                router-link(
                  :data-text="tab.title" 
                  :to="tab.href"
                  exact-active-class="nav-tabs__item--active"
                ).nav-tabs__link
  .admin__content
    router-view
  .tooltips-container(:class="{'showed' : showed}")
        tooltip(type="error")
</template>


<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/fonts.pcss";
  @import "../styles/layout/base.pcss";
  @import "../styles/admin/**/*.pcss";
  @import "../styles/layout/common.pcss";

  .tooltips-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 110%);
  visibility: hidden;
  transition: 0.3s;
  &.showed {
    transform: translate(-50%, 0%);
    visibility: visible;
  }
}

.about-block,
.review-block,
.work-block {
    background-color: rgba(#ffffff, 0.9);
}
</style>

<script>
import aboutBlock from './components/pages/about-block';
import workBlock from './components/pages/work-block';
import reviewBlock from './components/pages/review-block';
import tooltip from './components/tooltip';
import{ mapActions, mapGetters, mapState } from 'vuex';

export default {
  components: {
    aboutBlock, workBlock, reviewBlock, tooltip
  },
  computed: {
    ...mapState("tooltips", {
      showed: state => state.showed
    }),
    ...mapGetters("user", ["userIsLoggedIn"])
  },
    data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Отзывы", href: "/reviews" },
        { title: "Работы", href: "/works" }
      ]
    };
  },
  methods: {
    ...mapActions("tooltips", ["closeTooltip"]),
    ...mapActions('user', ['logout']),
    logoutUser() {
      this.logout();
      this.$router.replace('/login');
    }
  },
  watch: {
    showed(value) {
      if (value === true) {
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          this.closeTooltip();
        }, 3000);
      }
    }
  }
}
</script>