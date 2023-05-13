<template>

<div class="fon2">

    <div class="navbar_create">
        <nav-bar></nav-bar>
    </div>

    <div class="working__space">

        <div class="header__space">

            <div class="left__header__block">
            <h1 class="header__working_group"> Рабочая группа</h1>

            <div class="name__of__group"> getGroupData </div>
        </div>
            <div class="settings__icon"></div>

        </div>

        <div class="content__working_page">


        
            <div class="left__panel">

                <div class="left__categories">
                    <button class="button__categories"> Подгруппы</button>
                    <button class="button__categories"> Участники </button>
                    <button class="button__categories"> Чат </button>
                </div>
        
                <create-task-modal></create-task-modal>
                <div class="left__content">
                    <div class="subgroups__content"></div>
                    <div class="members__content"></div>
                    <div class="chat__content"></div>
                </div>

            </div>

            <div class="roadmap">

                <div class="roadmap__tools">
                    <div class="width__roadmap__tools">
                        <button class="button__categories"> Файлы </button>
                        <button class="button__categories"> Диаграмма </button>
                        <button class="button__categories"> Найстройки </button>
                    </div>
                </div>
                <!-- <kanban-board></kanban-board> -->
                <chat-field></chat-field>
                <!-- <div class="roadmap__content">
                    
                </div> -->


            </div>

        </div>

    </div>

</div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import KanbanBoard from "@/components/kanban/KanbanBoard.vue";
import CreateTaskModal from "@/components/kanban/CreateTaskModal.vue";
import { reactive } from 'vue';
import { mapMutations, mapActions, mapGetters } from 'vuex';
import ChatField from '../components/chat/ChatField.vue';

export default {
    data() {

        return {    

    }
    },
    components: {
        NavBar,
        KanbanBoard,
        CreateTaskModal,
        ChatField,
    },
    methods: {
        ...mapMutations({
            setUserData: 'main/setUserData',
        }),
        ...mapMutations({
            setGroupData: 'main/setGroupData'
        })
    },
    // mounted: {
    //     ...mapGetters({
    //         getGroupData: 'main/getGroupData'
    //     })
    // },
}


</script>


<style>

.fon2 {
    min-width: 100%;
    height: 100vh;
    background-color: rgba(17, 17, 17, 1);
}

.settings__icon {
    background-image: url("/img/gears.png");
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 20px;
}

.settings__icon:hover {
    background-color: rgb(164, 164, 164);
}

.header__space {
    position: relative;
    width: 1800px;
    height: 99px;
    left: 60px;
    top: 32px;

    display: flex;
    align-items: center;
    justify-content: space-around;
}

.left__header__block {
    display: flex;
    justify-content: space-between;
    align-items:end;
    width: 400px;
}

.header__working_group {
    color: white;
}

.name__of__group {
    color: yellow;
    font-size: 20px;
}

.left__panel {
    position: relative;
    width: 353px;
    height: 699px;
    left: 20px;
    top: 40px;
    border: 4px solid black;
    background: rgba(217, 217, 217, 0.1);
}

.left__categories {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 25px;
    background-color: black;
    color: white;
}

.button__categories {
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: 0.5s;
}

.button__categories:focus {
    color: yellow;
    text-decoration: underline
}

.content__working_page {
    display: flex;
    flex-direction: row;
}

.roadmap {
    position: relative;
    width: 1432px;
    height: 699px;
    top: 40px;
    background: #4d4d4d;
    left: 50px;

}

.width__roadmap__tools {
    display: flex;
    justify-content: space-around;
    width: 300px;
}

.roadmap__tools {
    display: flex;
    width: 100%;
    height: 25px;
    background-color: black;
    color: white;
}

.roadmap_content{
    width: 1500px;
    height: 1000px;
    background: teal;

}

</style>