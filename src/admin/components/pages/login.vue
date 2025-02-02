<template lang="pug">
    .login-page
        .login-page__form
            .login
                h1.login__title Авторизация
                .login__btn-close
                    button.btn-close(@click='returnToHomePage')
                        svg.btn-close__icon
                            use(xlink:href="sprite.svg#remove")
                .login__form
                    form(@submit.prevent='login').login-form
                        .login-form-row
                            label.input
                                .input__text Логин
                                .input__data
                                    input.input__elem(
                                        type="text"
                                        name="name"
                                        v-model='user.name'
                                        required
                                    )
                                    .input__error
                                    .input__icon
                                        svg.user-icon
                                            use(xlink:href="sprite.svg#user")
                        .login-form-row
                            label.input
                                .input__text Пароль
                                .input__data
                                    input.input__elem(
                                        type="password"
                                        name="name"
                                        v-model='user.password'
                                        required
                                    )
                                    .input__error
                                    .input__icon
                                        svg.pass-icon
                                            use(xlink:href="sprite.svg#key")
                        .login-form-btn
                            button.btn(type="submit") Отправить
</template>

<script>
import { mapActions } from "vuex";
import $axios from '../../requests';

export default {
    data: () => ({
        user: {
            name: 'sergeev-022020',
            password: '12345'
        }
    }),
    methods: {
        ...mapActions("user", ["loginUser"]),
        ...mapActions("tooltips", ["showTooltip"]),
        async login() {
            try {
                const response = await this.loginUser(this.user);
                const token = response.data.token;

                localStorage.setItem('token', token);
                $axios.defaults.headers['Authorization'] = `Bearer ${token}`;

                this.$router.replace('/');

            } catch (error) {
                this.showTooltip({ type: 'error', text: error.message, duration: 3000 });
                this.password = '';
            }
        },
        returnToHomePage() {
            location.href = '/'
        }
    }
};
</script>

<style scoped lang='postcss'>
.login-page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(#2d3c4e, 0.7);

}

.login {
    position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 563px;
  width: 100vw;
  padding: 55px 78px;
  background-color: white;
}

.btn-close  {
    position: absolute;
    top: 30px;
    right: 30px;
    background: none;
    fill: $main-color;
    width: 20px;
    height: 20px;
    padding: 0;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.3;
    }

    &__icon {
        fill: #2d3c4e;
        width: 100%;
        height: 100%;
    }
  }

.login__title {
    color: #414c63;
    font-size: 36px;
    font-weight: 600;
}

.input__icon {
    width: 26px;
    height: 30px;
    position: absolute;
    left: 0;
    fill: #414c63;
    opacity: .3;
    cursor: text;
    transition: .3s;
}

.user-icon,
.pass-icon {
    width: 100%;
    height: 100%;
}

.input__elem {
    width: 100%;
    background-color: #ffffff;
    outline: none;
    color: #414c63;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 2;
    padding: 0.9375rem 0.9375rem 0.9375rem 2.8125rem;
    border: none;
    border-bottom: 1px solid #414c63;
    transition: border .3s;

     &:focus {
        border-bottom: 1px solid $orange-color;
        
        ~ .input__icon {
            fill: $orange-color;
            opacity: 1;
        }
        
        &::placeholder {
            opacity: 0.3;
        }
}
}

.input__data {
    display: flex;
    align-items: center;
    position: relative;
}

.input__text {
    opacity: 0.3;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    padding-left: 45px;
}

.login__form {
    padding-top: 25px;
    width: 100%;
}

.login-form-row {
    margin-bottom: 35px;
}

.btn {
    margin-top: 0;
}

.login-form-btn {
    text-align: center
}
</style>