<template>

<div class="fon2">

    <div class="navbar_create">
        <nav-bar></nav-bar>
    </div>

    <div class="working__space">

        <div class="header__space">

            <div class="left__header__block">
                <h1 class="header__working_group"> Рабочая группа</h1>

                <div class="name__of__group"> {{ this.groupData.name }} </div>
            </div>

            <div class="settings__icon"
                @click="this.editWindowVisible"
            ></div>

            <edit-group v-model:show="this.editVissible">
                <edit-form
                :groupData="this.groupData"
                ></edit-form>
            </edit-group>
        </div>

        <div class="content__working_page">

            <div class="left__panel">

                <div class="tabs" id="left__tabs">

                    <nav class="tabs__items">
                        <a href="#tab_01" class="tabs__item"> Участники</a>
                        <a href="#tab_02" class="tabs__item"> Подгруппы</a>
                        <a href="#tab_03" class="tabs__item"> Чат</a>
                    </nav>

                    
                    <div class="tabs__body">
                        <div id="tab_01" class="tabs__block"> 
                            <div class="add__members__div">  <add-members-form></add-members-form> </div>
                            <div id="tab_01" class="no__members" v-if="getMembersLength == 0" > В группе пока нет ни одного участника :/ </div>
                            <members-board v-if="getMembersLength != 0"></members-board>
                        </div>
                        <div id="tab_02" class="tabs__block"> 
                            <div class="add_subgroups__div"> <add-subgroups-form></add-subgroups-form> </div>
                                <div id="tab_02" class="no__members" v-if="getSubGroupsLength == 0" > В группе пока нет ни одной подгруппы :/ </div>
                                <sub-groups-board v-if="getSubGroupsLength != 0"></sub-groups-board  > </div>
                            <div id="tab_03" class="tabls__block"></div>
                        </div>
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

                <kanban-board></kanban-board>
                <!-- <chat-field></chat-field> -->
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
import ChatField from '../components/chat/ChatField.vue';

import { mapMutations, mapActions, mapGetters, mapState } from 'vuex';
import EditGroup from "@/components/UI/EditGroup.vue";
import EditForm from "@/components/EditForm.vue";
import membersBoard from "@/components/members/membersBoard.vue";
import subGroupsBoard from "@/components/subGroups.vue/subGroupsBoard.vue";
import AddMembersForm from "@/components/AddMembersForm.vue";
import AddSubgroupsForm from "@/components/AddSubgroupsForm.vue";

export default {
    data() {
        return {    
            editVissible: false,
            groupData: this.getGroupData()
    }
    },
    components: {
        NavBar,
        KanbanBoard,
        EditGroup,
        EditForm,
        membersBoard,
        subGroupsBoard,
        CreateTaskModal,
        AddMembersForm,
        AddSubgroupsForm,
        ChatField,
    },
    methods: {
        ...mapMutations({
            setUserData: 'main/setUserData',
        }),
        ...mapGetters({
            getMembers: 'main/getMembers',
            getGroupData: 'main/getGroupData',
            getSubGroupsData: 'main/getSubGroupsData',
            getMembersLength: 'main/getMembersLength',
            getSubGroupsLength: 'main/getSubGroupsLength'
        }),
        editWindowVisible() {
            this.editVissible = true
        },
        showAddForm() {
            this.addFormVisible = true
        }
    }
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
    align-items:end;
}

.header__working_group {
    color: white;
    margin-right: 55px;
}

.name__of__group {
    color: #f5cf13;
    font-size: 20px;
}

.left__panel {
    position: relative;
    width: 353px;
    height: 710px;
    left: 20px;
    top: 40px;
    border: 4px solid black;
    background: rgba(217, 217, 217, 0.1);
}

.tabs__body {
    height: 685px;
    width: 353px;
    overflow-y: auto;
    overflow-x: hidden;
}

.tabs__body::-webkit-scrollbar {
    width: 10px;
}

.tabs__body::-webkit-scrollbar-track {
    background-color: #454545;
}


.tabs__body::-webkit-scrollbar-thumb {
    background: rgb(121, 121, 121);
}

.tabs__body::-webkit-scrollbar-thumb:hover {
    background: rgb(96, 96, 96);

}

.tabs__items {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 25px;
    background-color: black;
    color: white;
}

.tabs__item {
    position: relative;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: 0.5s;
    text-decoration: none;
}


.tabs__block {
    display: none;
}

.tabs__block:target{
    display: block;
}

.tabs__block:before {
    content: "";
    width: 67px;
    height: 25px;
    position: absolute;
    left: 30px;
    margin-bottom: 20px;
    display: none;
}

.tabs__block:nth-child(1):before {
    background-color: orange;
    position: absolute;

}

.tabs__block:nth-child(2):before {
    background-color: orange;
    left: 163px;
}

.add__members__div{
    display: flex;
    justify-content: center;
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
    color: #f5cf13;
    text-decoration: underline
}



.add__members:hover {
    background: #9e9e9e;

}

.no__members {
    color: white;
    font-size: 25px;
    text-align: center;
    margin-top: 100px;
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