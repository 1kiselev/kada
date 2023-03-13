<template>

<form @submit.prevent="loginUser" novalidate>
    <div class="login_window">

        <div class="title_login"
            style="font-size: 28px;
            font-weight: 600;
            margin-bottom: 51px;
            "
        >
                Вход
        </div>
        <h1 class="login_header"> Введите ваш Email </h1>
        <my-input
            @blur="$v.login.email.$touch()"
            :class="{'is-invalid': $v.login.email.$error}"
            placeholder="Email"
            v-model="login.email"
            type="email"
            style="
            margin-top: 12px;
            "
        />
        <h1 class="login_header"
        style="
        margin-top: 21px;
        "
        > Введите ваш пароль </h1>

        <my-input
            placeholder="Пароль "
            v-model="login.password"
            style="
             margin-top: 12px;
        "
        type="password"
        />


        <div class="no_account">

            <h3 class="no_acc">
                Нет аккаунта?
            </h3>

            <h3 class="create_acc"
            style="
            margin-left: 40px;
            cursor: pointer;
            "
            >
                Создать аккаунт
            </h3>
        </div>

        <my-lit-button
            style="
            margin-top: 47px;
            font-weight: 600;
            font-size: 20px;
            "
        > 
            Принять
        </my-lit-button>
    
    </div>

</form>
</template>



<script>
import MyInput from './UI/MyInput.vue';
import MyLitButton from './UI/MyLitButton.vue';
import {validationMixin} from 'vuelidate'
import {required} from 'vuelidate/lib/validators'

export default {
    components: {
        MyInput,
        MyLitButton,
    },
    mixins: [
        validationMixin
    ],
    data() {
        return {
            login: {
                email: '',
                password: '' 
            }
        }
    },
    methods: {

    },
    validaters: {
        login: {
            email: {
                required
            },
            password: {
                required
            }
        }
    }

}

</script>



<style>



.login_window {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 53px;
    padding-bottom: 53px;
}

.login_header {

width: 375px;
height: 13px;
left: calc(50% - 113px/2 - 126.5px);

font-family: 'Advent Pro';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;

}

.no_account {
    display: flex;
    font-size: 15px;
    width: 375px;

}

.forget_password {
    width: 440px;
    margin-top: 22px;
}

.no_account {
    margin-top: 19px;
}
</style>

