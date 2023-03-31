<template>
<div class="fon1">

    <div class="navbar_create">
        <nav-bar></nav-bar>
    </div>

    <div class="setka">

        <div class="templates">
            <div class="header_list">
                <h1 class="listof_templates">
                    Список шаблонов
                </h1>
                <h1 class="chose_templates">
                    вы можете выбрать уже готовые шаблоны для ващей рабочей группы!
                </h1>
            </div>

                <div class="blocks_templates">
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                </div>
            
            
        </div> <!-- templates-->



        <div class="creatink_work">
            <h1 class="creat_group"> Создание рабочей группы</h1>
        
            <div class="box">
                <div class="one_block">
                    <div class="little_h"
                    style="
                    color: yellow;
                    cursor: pointer;
                    "
                    > Изменить фото группы</div>
                    <div class="blockof_avatar"></div>
                </div>

                <div class="one_block">
                    
                    <div class="name">
                        <div class="little_h"> Название группы</div>

                       <my-create-input  
                       @blur="v$.name_of_group.$touch()"
                        v-model="state.create.name_of_group"
                       ></my-create-input>
                        <span v-if="v$.name_of_group.$error" style="color:red; display: flex">
                            {{ 'Это обязательное поле!' }}
                        </span>

                    </div>


                    <div class="link">
                        <div class="little_h"> Ссылка для приглашения </div>
                        <my-create-input>  </my-create-input>
                    </div>
                </div>
                
                <div class="one_block">
                    <div class="little_h">
                        Описание
                    </div>

                    <textarea
                    v-model="state.create.description_of_group"
                    class="text_desc"></textarea>
                </div>
        </div>


        </div>

        <button
        class="button__create"
        @click="$router.push('/working_group') "

        >
            Создать
        </button>



    </div>

</div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import MyLitButton from "@/components/UI/MyLitButton.vue";
import MyCreateInput from "@/components/UI/MyCreateInput.vue";
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'


export default {
    components: {
        NavBar,
        MyLitButton,
        MyCreateInput
    },
    setup() {
        const state = reactive ({
            create: {
                avatar: '',
                name_of_group: '',
                link_group: '',
                description_of_group: ''
            }
        })

        const rules = {
            name_of_group: { required}
        }

        const v$ = useVuelidate(rules, state)

        return {
            state,
            v$
        }
    }


}
</script>



<style>

.fon1 {
    height: 100vh;
    min-width: 100%;
    width: 1900px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(17, 17, 17, 1);

}

.navbar_create{
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
}

.setka {
    width: auto;
    height: auto;
    margin-top: 60px;
    padding-left: 100px;
    background-color: rgb(32, 32, 32);
    border-radius: 20px;
    padding-top: 20px;
    padding-bottom: 30px;
    border: 0.5px white solid;
}

.header_list {
    display: flex;
    margin-bottom: 39px;
}

.blocks_templates {
    display: flex;
    margin-bottom: 39px;
}

.name {
    display: block;
    margin-bottom: 10px;
}

.block {
    width: 151.25px;
    height: 110px;
    margin-right: 50px;    
    background: #D9D9D9;
    border-radius: 8px;

}


.listof_templates {
    font-size: 32px;
    margin-right: 44px;
}

.chose_templates {
    font-size: 20px;
    display: flex;
    align-items:end;
    color: rgba(255, 245, 0, 1);
}

/* -----------------------  */
.creat_group {
    margin-bottom: 28px;
}
.box {
    display: flex;
}

.blockof_avatar{

    box-sizing: border-box;
    width: 158px;
    height: 132.61px;
    background: #D9D9D9;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
}

.description_block {
    width: 255px;
    height: 116px;

    background: #D9D9D9;
    border-radius: 8px;
}

.one_block {
    margin-right: 63px;
    margin-bottom: 60px;
}
.little_h {
    margin-bottom: 5px;
}

.button__create{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    
    width: 127.98px;
    height: 43px;
    font-size: 18px;
    background: #000000;
    border: 1px solid #ffffff;
    border-radius: 8px;
    transition: 0.3s;
    cursor: pointer;
    color: white;
}

.button__create:hover {
    background: rgb(34, 34, 34);
}

.text_desc {

    width: 255px;
    height: 116px;
    border-radius: 8px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-left: 10px;
    padding-top: 5px;
    font-size: 15px;
    opacity: 0.7;
}
</style>