<template>

<form @submit.prevent="" novalidate>
    <div class="login_window">

        <div class="title_login"
        style="font-size: 150%;font-weight: 600;margin-bottom: 51px;"
        >
                Вход
        </div>
        <h1 class="login_header"> Email </h1>
        <my-input
        @blur="v$.email.$touch()"
        placeholder="Email"
        v-model="state.userData.email" type="email"
        id="email"
        style="
        margin-top: 12px;"
        />
        <span v-if="v$.email.$error"
        style="color:red"
        >
            {{ 'Пожалуйста, введите коректно ваш email адрес' }}
        </span>
        <h1 class="login_header"
        style="margin-top: 21px;"
        > Пароль </h1>

        <my-input
        type="password"
        @blur="v$.password.$touch()"
        placeholder="Пароль "
        v-model="state.userData.password"
        id="password"
        style="margin-top: 12px;"
        />
        <span v-if="v$.password.$error"
        style="color:red"
        >
            {{ 'Пожалуйста, введите ваш пароль (минимум 6 символов)' }}
        </span>


        <div class="no_account">

            <div class="no-bootstrap">
                Нет аккаунта?
            </div>

            <div class="create_acc"
            @click="showRegistr"
            style="margin-left: 40px; cursor: pointer;">
                Создать аккаунт
        </div>
        </div>

        <my-lit-button
        style="margin-top: 47px; font-weight: 600; font-size: 20px;;"
        type="submit"
        :method="login"
        :params="[state.userData]"
        > 
            Принять
        </my-lit-button>
    
    </div>

</form>
</template>



<script>
import MyInput from './UI/MyInput.vue';
import MyLitButton from './UI/MyLitButton.vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { reactive } from 'vue';
import { mapMutations, mapActions} from 'vuex';
import toggleMixin from '@/mixins/toggleMixin';

export default {
    components: {
        MyInput,
        MyLitButton,
    },
    mixins: [toggleMixin],
    setup() {
        const state = reactive( {
            userData: {
                email: '',
                password: ''
        }})

        const rules =  {
            email: {required, email},
            password: {required, minLength: minLength(6)}
        }
        
        function submitLogin() {
            this.v$.validate()
        }


        const v$ = useVuelidate(rules, state)

        return { 
            state, 
            v$, 
            submitLogin, 
            
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate()
        },
        ...mapMutations({
            setUserData: 'main/setUserData',
        }),
        ...mapActions({
            userLogin: 'main/userLogin',
        }),
        login(data){
            this.submitForm()
            this.userLogin(data)
            this.$router.push('/')
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
    width: 80%;
    height: 13px;
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 80%;
    line-height: 19px;
    color: #FFFFFF;
}

.no_account {
    display: flex;
    font-size: 80%;
    width: 80%;

}

.forget_password {
    width: 440px;
    margin-top: 22px;
}

.no_account {
    margin-top: 19px;
    display: flex;
    justify-content: space-between;
}

</style>

