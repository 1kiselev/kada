<template>

<div class="fon2">

    <div class="navbar_create">
        <nav-bar></nav-bar>
    </div>

    <div class="working__space">

        <div class="header__space">

            <div class="left__header__block">
            <h1 class="header__working_group"> Рабочая группа</h1>

            <div class="name__of__group"> {{ this.group.name }} </div>
        </div>
            <div class="settings__icon"
            @click="editWindowVisible"
            ></div>

            <edit-group v-model:show="editVissible">
                <edit-form></edit-form>
            </edit-group>

            

        </div>

        <div class="content__working_page">


        
            <div class="left__panel">

                <div class="tabs">

                <div class="left__categories">
                    <a href="#tab_01" class="button__categories" > Подгруппы</a>
                    <a href="#tab_02" class="button__categories" > Участники </a>
                    <a href="#tab_03" class="button__categories"> Чат </a>


                </div>
            </div>
                <members-board :show="boardVisible"></members-board>

                <sub-groups-board :show="subGroupsBoardVisible"></sub-groups-board>


            </div>

            <div class="roadmap">

                <div class="roadmap__tools">
                    <div class="width__roadmap__tools">
                        <button class="button__categories"> Файлы </button>
                        <button class="button__categories"> Диаграмма </button>
                        <button class="button__categories"> Найстройки </button>
                    </div>
                </div>
                <kanban-board></kanban-board>

            </div>

        </div>

    </div>

</div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import KanbanBoard from "@/components/kanban/KanbanBoard.vue";
import { reactive } from 'vue';
import { mapMutations, mapActions, mapGetters, mapState } from 'vuex';
import EditGroup from "@/components/UI/EditGroup.vue";
import EditForm from "@/components/EditForm.vue";
import membersBoard from "@/components/members/membersBoard.vue";
import subGroupsBoard from "@/components/subGroups.vue/subGroupsBoard.vue";

export default {
    data() {
        return {    
            editVissible: false,
            group: this.getGroupData(),
            boardVisible: false,
            subGroupsBoardVisible: false
    }
    },
    components: {
        NavBar,
        KanbanBoard,
        EditGroup,
        EditForm,
        membersBoard,
        subGroupsBoard
    },
    methods: {
        ...mapMutations({
            setUserData: 'main/setUserData',
        }),
        ...mapMutations({
            setGroupData: 'main/setGroupData'
        }),
        editWindowVisible() {
            this.editVissible = true
        },
        ...mapGetters({
            getGroupData: 'main/getGroupData',
        }),
        showBoard() {
            this.boardVisible = true
        },
        showSubGroupsBoard() {
            this.subGroupsBoardVisible = true
        }
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
    color: #f5cf13;
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