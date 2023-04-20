<template>
    <form >

        <div class="edit__window">

            <h1 class="title__edit"> Настройки группы </h1>

            <div class="photo__group"></div>

            <div class="edit_name_of_group"> Изменить название группы </div>

            <my-input style="margin-bottom: 20px;"></my-input>

            <my-input></my-input>

            <my-lit-button> Сохранить изменения </my-lit-button>

        </div>

        


    </form>


</template>


<script>
import MyInput from "@/components/UI/MyInput.vue"
import MyLitButton from "./UI/MyLitButton.vue";

export default {
    components: {
        MyInput,
        MyLitButton
    }
}


</script>


<style>

.edit__window {

padding-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
color: white;
border-radius: 8px;
padding-bottom: 35px;
padding-top: 53px;
}

.title__edit {
    margin-bottom: 35px;
}

.photo__group {

width: 168px;
height: 139px;
margin-bottom: 10px;
background: #D9D9D9;
border-radius: 65px;

}

.edit_name_of_group {
    color: yellow;
    margin-bottom: 20px;
}




</style>