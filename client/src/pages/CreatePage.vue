<template>
<div class="fon1">

    <div class="navbar_create">
        <nav-bar></nav-bar>
    </div>

    <div class="setka">

        <div class="setka__content">
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
                    color: #f5cf13;
                    cursor: pointer;
                    "
                    > Загрузить фото группы</div>
                    <div class="blockof_avatar"></div>
                </div>

                <div class="one_block">
                    
                    <div class="name__h">
                        <div class="little_h"> Название группы</div>
                       <my-create-input  
                       @blur="v$.name.$touch()"
                        v-model="state.create.name"
                       ></my-create-input>
                        <span v-if="v$.name.$error" style="color:red; display: flex">
                            {{ 'Это обязательное поле!' }}
                        </span>

                    </div>

                    <div class="link">
                        <div class="little_h"> Ссылка для приглашения </div>
                        <my-input-link v-model="state.create.link_group"  readonly></my-input-link>
                    </div>
                    <button class="copy__button" @click="copy"> copy link </button>
                </div>

                <div class="one_block">
                    <div class="little_h">
                        Описание
                    </div>

                    <textarea
                    v-model="state.create.description"
                    class="text_desc">
                    </textarea>

                </div>
            </div>
        </div>
    
        <button
        class="button__create"
        @click="create"
        >
            Создать
        </button>
    </div>
    </div>

</div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import MyLitButton from "@/components/UI/MyLitButton.vue";
import MyCreateInput from "@/components/UI/MyCreateInput.vue";
import MyInputLink from "@/components/UI/MyInputLink.vue";
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { mapActions, mapMutations } from "vuex";


export default {
    components: {
        NavBar,
        MyLitButton,
        MyCreateInput,
        MyInputLink
    },
    setup() {
        const state = reactive ({
            create: {
                // avatar: '',
                name: '',
                link_group: 'link//:0101010',
                description: ''
            },
        })

        const rules = {
            name: { required}
        }

        const v$ = useVuelidate(rules, state)

        return {
            state,
            v$,
        }
    },

    methods: {
        ...mapMutations({
            setGroupData: 'main/setGroupData'
        }),

        ...mapActions({
            createGroup: 'main/createGroup',
        }),
        create(){
            this.setGroupData(this.state.create)
            // this.createGroup()
            this.$router.push('/working_group') 
            console.log('here')
        },
        copy() {
            try {
                navigator.clipboard.writeText(this.state.create.link_group)
            } catch (e) {
                throw e
            }
        }
    }
}
</script>


<style>

.fon1 {
    height: 100vh;
    min-width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("/img/fon.png");
    background-size: 100% 100%;


}

.navbar_create{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.setka {
    width: 973px;
    height: 60%;
    margin-top: 60px;
    padding-left: 100px;
    background-color: rgb(32, 32, 32);
    border-radius: 20px;
    padding-top: 20px;
    padding-bottom: 30px;
    border: 0.5px #ffffff solid;
}

.setka__content {
    width: 90%;
    height: 90%;
}

.header_list {
    display: flex;
    margin-bottom: 2.5%;
}

.blocks_templates {
    display: flex;
    margin-bottom: 39px;
}

.name__h {
    display: block;
    margin-bottom: 10px;
}

.block {
    width: 25%;
    height: 110px;
    margin-right: 50px;    
    background: #D9D9D9;
    border-radius: 8px;
}

.templates {
    height: 40%;
}

.listof_templates {
    font-size: 32px;
    margin-right: 15px;
}

.chose_templates {
    font-size: 20px;
    display: flex;
    align-items:end;
    color: #f5cf13;
}

/* -----------------------  */

.creatink_work {
    height: 50%;
    margin-bottom: 3%;
}
.creat_group {
    margin-bottom: 2.5%;
}

.box {
    display: flex;
    height: 30%;
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
    margin-right: 3%;
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
    padding-right: 10px;
    padding-top: 5px;
    font-size: 15px;
    opacity: 0.7;
    background: #515151;
    color: white;
    user-select: none;
    resize: none;
    outline: none;
}

.text_desc::-webkit-scrollbar {
    width: 10px;
}

.text_desc::-webkit-scrollbar-track {
    background-color: #454545;
}

.text_desc::-webkit-scrollbar-thumb {
    background: rgb(121, 121, 121);
}

.text_desc::-webkit-scrollbar-thumb:hover {
    background: rgb(96, 96, 96);
}

.copy__button {
    color: white;
    font-size: 15px;
    background: none;
    border: none;
    background-color: #111111;
    width: 80px;
    height: 30px;
    border-radius: 8px;
    margin-top: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.copy__button:hover {
    background: rgb(27, 27, 27);
}


@media screen and (max-width: 1600px) {
    .blockof_avatar {
        width: 140px;
        height: 120px;
    }

    .listof_templates {
        font-size: 22px;
    }

    .creat_group {
        font-size: 22px;
        margin-bottom: 24px;
    }

    .setka {
        width: 800px;
    }

    .chose_templates {
        font-size: 14px;
    }

    .blocks_templates {
        margin-bottom: 30px;
    }

    .little_h {
        font-size: 12px;
    }
}
</style>