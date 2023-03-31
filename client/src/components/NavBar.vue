<template>

    <div class="navbar">

        <div class="kada"
        style="cursor:pointer"
        @click="$router.push('/') "
        >
            KADA
        </div>

            <div class="login_registr">

                <div class="my_groups_my_projects">
                Мои группы
                </div>

                <div class="login"
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


export default {
    components: {
        MyLogin,
        LoginForm,
        MyRegistr,
        RegistrForm,
    },
    data() {
        return {
            LoginVisible: false,
            RegistrVisible: false,
        }
    },
    methods: {
        showLogin() {
            this.LoginVisible = true;
            console.log('дошёл до этого момента')

        },
        showRegistr() {
            this.RegistrVisible = true;
        }
    },
}

</script>


<style>



.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 1366px;
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
    color: #FFFFFF;
    cursor: pointer;
    transition:  0.3s;
    background-color: rgb(70, 70, 70);
    width: 150px;
    border-radius: 8px;
}

.registration:hover {
    background: rgb(34, 34, 34);
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

</style>