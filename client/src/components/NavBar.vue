<template>
    <div class="navbar">
        <div class="kada"
        style="cursor:pointer"
        @click="$router.push('/') "
        >
            KADA
        </div>
            <div class="login_registr">
                <div class="hi__user"> Hi,  {{ this.user.username }} !</div>
                <div class="my_groups_my_projects">
                Мои группы
                </div>
                    <div class="login"
                    v-if="authCheck == false"
                    @click="showLogin"
                    >
                        Войти
                    </div>

                    <div class="registration"
                    @click="showRegistr"
                    >
                        Создать аккаунт 
                    </div>
            </div>
        <my-login v-model:show="LoginVisible">
            <login-form/>
        </my-login>

        <my-registr v-model:show="RegistrVisible">
            <registr-form/>
        </my-registr>
    </div>


</template>

<script>
import MyLogin from './UI/MyLogin.vue';
import LoginForm from './LoginForm.vue';
import MyRegistr from './UI/MyRegistr.vue';
import RegistrForm from './RegistrForm.vue';
import toggleMixin from '@/mixins/toggleMixin';
import { mapGetters } from 'vuex';


export default {
    components: {
        MyLogin,
        LoginForm,
        MyRegistr,
        RegistrForm,
    },
    mixins: [toggleMixin],
    data() {
        return {
            authCheck: false,
            user: this.getUserData(),
        }
    },
    methods: {
        ...mapGetters ({
            authCheck: 'main/authCheck',
            getUserData: 'main/getUserData'
        }),
    },
   
}

</script>


<style>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 80%;
    max-width: 80%;
}

.kada {
    font-family: 'Advent Pro';
    font-style: normal;
    font-size: 50px;
    text-align: center;
    color: #FFFFFF;
    mix-blend-mode: normal;
}

.login_registr {
    display: flex;
    font-size: 20px;
}
.login {
    margin-left: 60px;
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    transition: color 0.3s;
}

.hi__user {
    margin-right: 20px;
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    transition: color 0.3s;
}

.login:hover {
    color: #bbbbbb;
}

.registration {
    margin-left: 20px;
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    transition:  0.3s;
    background-color: #3a3a3a;
    width: 8em;
    border-radius: 8px;
}

.registration:hover {
    background-color: #1c1c1c;
}

.my_groups_my_projects {
    font-family: 'Advent Pro';
    font-style: normal;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    transition: color 0.3s;
}

.my_groups_my_projects:hover {
    color: #bbbbbb;
} 

@media screen and (max-width: 1600px) {
    .kada {
        font-size: 40px;
    }

    .login_registr {
        font-size: 16px;
    }

    .login {
        margin-left: 40px;
    }

    .registration {
        margin-left: 15px;
    }
}

</style>