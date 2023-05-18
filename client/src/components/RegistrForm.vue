<template>

<form @submit.prevent="submitForm" novalidate> 
    <div class="registr__window">

        <div class="registr__tittle"
            style="font-size: 28px;font-weight: 600;margin-bottom: 50px;"
        >
                Регистрация
        </div>

        <h1 class="registr__header"> Имя</h1>
        <my-input
            @blur="v$.username.$touch()"
            v-model="state.userData.username"
            required
            type="text"
            style="margin-top: 7px;"
        />
        <span class="span__error" v-if="v$.username.$error"
            style="color:red"
        >
            {{ 'Пожалуйста, введите ваше имя'}}
        </span>


        <h1 class="registr__header"
        style="margin-top: 21px;"
        > Email</h1>
        
        <my-input 
        @blur="v$.email.$touch()"
        v-model="state.userData.email"
        type="email"
        style="margin-top: 7px"
        ></my-input>
        
        <span class="span__error" v-if="v$.email.$error"
            style="color:red"
            >
                {{ 'Пожалуйста, введите коректно ваш email'}}
        </span>

        
        <h1 class="registr__header"
            style="margin-top: 21px;"
        > Пароль</h1>

        <input
            class="input__password"
            @blur="v$.password.$touch()"
            v-model="state.userData.password"
            style="margin-top: 7px"
            type="password"
        />

        <span  class="span__error" v-if="v$.password.$error"
        style="color:red"
        >
            {{ 'Пожалуйста, придумайте пароль (минимум 6 символо)'}}
        </span>

        <h1 class="registr__header"
         style="margin-top: 21px;"
        > Введите ваш пароль ещё раз</h1>

        <input
            class="input__password"
            @blur="v$.confirm.$touch()"
            v-model="state.userData.confirm"
            style="margin-top: 7px;"
            type="password"
        />

        <span class="span__error" v-if="v$.confirm.$error"
        style="color:red"
        >
            {{ 'Это поле должно совпдаать с  вашим поролем!' }}
        </span>
    

        <div class="no_account">

            <h1 class="registr__header">
                Уже есть аккаунт?
            </h1>

            <h3 class="registr__header"
            style="margin-left: 40px;cursor: pointer;"
            >
                Войти
            </h3>
        </div>

        <my-lit-button
            type="submit"
            :method="registrate"
            :params="state.userData"
            
        > 
            Принять
        </my-lit-button>
    </div>

    </form>
</template>



<script>
import MyInput from './UI/MyInput.vue';
import MyLitButton from './UI/MyLitButton.vue';
import { mapMutations, mapActions, mapGetters } from 'vuex';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators';
import { reactive } from 'vue';

export default {
    setup() {
        const state = reactive ({
            userData: {
                username: '',
                email: '',
                password: '',
                confirm: '',
        }})

        const rules =  {
                username: {required},
                email: {required, email},
                password: {required, minLength: minLength(6)},
                confirm: {required, sameAs: sameAs(state.userData.password)}
            }
        
        const v$ = useVuelidate(rules, state)

        return  {
            v$,
            state
        }
    },
    components: {
        MyInput,
        MyLitButton,
    },
    // mounted: {
    //     ...mapGetters({
    //         getUsername: 'main/getUsername'
    //     })
    // },
    methods: {
        ...mapMutations({
            setUserData: 'main/setUserData',
        }),
        ...mapActions({
            userRegistration: 'main/userRegistration',
            userLogin: 'main/userLogin',
        }),

        submitForm() {
            this.v$.$validate()
        }, 
        registrate(data){
            this.submitForm()
            this.setUserData(data)
            this.userRegistration(data)
            this.$router.push('/')
        },
    }
}
</script>



<style>
.registr__window {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 53px;
    padding-bottom: 53px;
    
}

.registr__header {
    width: 373px;
    left: calc(50% - 137px/2 - 119.5px);
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
}
.span__error {
    position: relative;
    text-align: left;
    width: 100%;
    left: 40px;
}

.input__password {
    width: 80%;
    height: 49px;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid gray;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    transition: 0.4s;
    color: white;
}

.input__password:focus {
    border-bottom: 2px solid white;
}

::placeholder {
    font-size: 16px;
    opacity: 0.5;
}
</style>

