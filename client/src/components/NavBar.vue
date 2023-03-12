<template>

    <div class="navbar">

        <div class="kada"
        style="cursor:pointer"
        @click="$router.push('/') "
        >
            KADA
        </div>

        <div class="navbar__btns">

            <div class="my_groups_my_projects">
                мои группы/проекты
            </div>

            <div class="login_registr">

                <div class="login"
                @click="showLogin"
                >
                    Войти
                </div>

                <div class="registration"
                @click="showRegistr"
                >
                    Зарегистрироваться 
                </div>
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
    justify-content: space-between;
    align-items: center;
    height: 100px;

    padding-left: 244px;
    padding-right: 100px;
}

.kada {
    width: 200px;
    height: 77.81px;
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 77px;
    text-align: center;
    color: #FFFFFF;
    mix-blend-mode: normal;


}

.navbar__btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 750px;
    height: 56px;
    top: 50px;
    margin-right: 50px;
}
.login_registr {
    display: flex;
}
.login {
    height: 33px;
    margin-left: 10px;
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
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
    height: 33px;
    margin-left: 20px;
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    transition: color 0.3s;
}

.registration:hover {
    color: #bbbbbb;
}

.my_groups_my_projects {
    height: 27.28px;
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    transition: color 0.3s;
}

.my_groups_my_projects:hover {
    color: #bbbbbb;
} 


</style>