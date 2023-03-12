<template>
    <div class="registr_window">
        <div class="title_registr"
            style="font-size: 28px;
            font-weight: 600;
            margin-bottom: 50px;
            "
        >
                Регистрация
        </div>

        <h1 class="registr_header"> Введите ваше имя</h1>
        <my-input
        placeholder="Имя"
        style="
        margin-top: 7px;
        "
        />
        <h1 class="registr_header"
        style="
        margin-top: 21px;
        "
        > Введите ваш Email</h1>
        <my-input
        placeholder="Email "
        style="
        margin-top: 7px;
        "
        />
        <h1 class="registr_header"
        style="
        margin-top: 21px;
        "
        > Введите ваш пароль</h1>

        <my-input
        placeholder="Пароль " 
        style="
        margin-top: 7px;
        "
        type="password"
        />

        <h1 class="registr_header"
        style="
        margin-top: 21px;
        "
        > Введите ваш пароль ещё раз</h1>

        <my-input
        placeholder="Пароль " 
        style="
        margin-top: 7px;
        "
        type="password"

        />

        <div class="no_account">

            <h3 class="no_acc">
                Уже есть аккаунт?
            </h3>

            <h3 class="create_acc"
            style="
            margin-left: 40px;
            cursor: pointer;
            "
            >
                Войти
            </h3>
        </div>


        <my-lit-button
        style="
        margin-top: 53px;
        font-weight: 600;
        font-size: 20px;
        "
        > 
            Принять
        </my-lit-button>
    
    </div>
</template>



<script>
import MyInput from './UI/MyInput.vue';
import MyLitButton from './UI/MyLitButton.vue';


export default {
    components: {
        MyInput,
        MyLitButton,
    }
}

</script>



<style>



.registr_window {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 53px;
    padding-bottom: 53px;
}

.registr_header {
    /* Etner your UserName */
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

</style>

