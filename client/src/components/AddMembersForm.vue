<template>

<div class="add__member__window">
<a @click="openForm" class="add__members"> Добавить участников</a>

<form class="add__members__connent" @submit.prevent v-if="addFormVisible == true" >

    <div class="exit__row">
        <div class="add__title"> Добавление участников</div>
        <div class="fon__exit" @click="cancelForm">
            <div class="exit" > Х </div>
        </div>
    </div>

    <input 
    v-model="members.username"
    class="add__input" 
    placeholder="Введите имя участника"
    style="margin-top: 20px;"
    >

    <my-lit-button 
    :method="compliteAdd"
    :params="[this.members]"
    style="width: 290px;margin-top: 30px;"
    > Добавить 
    </my-lit-button>
</form>
</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import MyInput from './UI/MyInput.vue';
import MyLitButton from './UI/MyLitButton.vue';
import memberCard from './members/memberCard.vue';

export default {
    components: {
        MyInput,
        MyLitButton,
        memberCard
    },
    data() {
        return {
            members: {
                id: '',
                email: '',
                username: ''
            },
            addFormVisible: false
        }
    },

    methods: {
        ...mapMutations({
            addNewMemebers: 'main/addNewMembers',
        }),
        compliteAdd() {
            this.addNewMemebers(this.members),
            this.members = {
                id: '',
                email: '',
                username: '',
            }
            
        },
        cancelForm() {
            this.addFormVisible = false
        },
        openForm() {
            this.addFormVisible = true
        }
        // addNewMemebers() {
        //     this.$emit('addNewMemebers', this.NewMembers)
        // }
    }

}

</script>



<style>

.add__member__window {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.add__members__connent {
    width: 330px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9999;
    border: 2px white solid;
    border-radius: 8px;
    padding-bottom: 20px;
    margin-top: 20px;
}

.add__members {
    color:rgb(0, 0, 0);
    font-weight: 700;
    width: 300px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    margin-top: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
    text-decoration: none;
    font-size: 20px;    
}
.exit__row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-right: 10px;
}
.fon__exit{
    width: 30px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s;
}
.exit {
    color: white;
    font-size: 20px;
    cursor: pointer;
    border-radius: 4px;
}
.fon__exit:hover {
    background-color: red;
}

.add__title {
    position: relative;
    margin-top: 10px;
    margin-right: 40px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
}
.add__input {
    width: 90%;
    height: 49px;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid gray;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-left: 10px;
    transition: 0.4s;
    color: white;
}

.add__input:focus {
    border-bottom: 2px solid white;
}

::placeholder {
    font-size: 16px;
    opacity: 0.7;
}
</style>