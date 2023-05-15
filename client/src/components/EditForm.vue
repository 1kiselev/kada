<template>
    <form @submit.prevent="">

        <div class="edit__window">

            <h1 class="title__edit"> Настройки группы </h1>

            <div class="photo__group"></div>

            <div class="edit_name_of_group"> Изменить фото группы </div>


            <div class="edit__name__of__group"> Редактирование завание группы</div>
            <my-input
            style="margin-bottom: 20px;"
            v-model="group.name">
            </my-input>

            <div class="edit__descriptio__of__group"> Редактирование описание группы</div>
            <textarea class="my__textarea" v-model="group.description"></textarea>

            <my-lit-button
            :method="saveChanges"
            :params="[this.group]"
            > Сохранить изменения 
            </my-lit-button>

        </div>
    </form>


</template>


<script>
import MyInput from "@/components/UI/MyInput.vue"
import MyLitButton from "./UI/MyLitButton.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
    components: {
        MyInput,
        MyLitButton
    },
    data() {
        return {
            group: {
                name: this.groupData.name,
                description: this.groupData.description
            },
            isEdit: false
        }
    },
    props: {
        groupData: {
            name: String,
            description: String
        }
    },
    methods: {
        ...mapMutations({
            setGroupData: 'main/setGroupData'
        }),
        saveChanges() {
            this.setGroupData(this.group),
            this.isEdit = false
        },
        edit() {
            this.isEdit = true
        }
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
width: 375px;


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

.my__textarea{

width: 375px;
height: 150px;
font-size: 20px;
background: none;
border: 2px gray solid;
border-radius: 25px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
padding-left: 10px;
padding-right: 10px;
padding-top: 10px;
color: white;
resize: none;
outline: none;
transition: 0.4s;
}

.my__textarea:focus{
    border: 2px white solid;
}


.edit__name__of__group {
    text-align: left;
    width: 100%;
}

.edit__descriptio__of__group {
    text-align: left;
    width: 100%;
    margin-bottom: 15px;
}

</style>