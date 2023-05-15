<template>

    <div class="member__card" 
    @mouseover="deleteMembersVisible"
    @mouseout="deleteMemebersUnVisible"
    >

        <div class="member__photo"></div>

        <div class="members__content">

            <div class="member__name"> 
                {{ this.member.username }}
            </div>

            <div class="member__role">
                {{ this.member.role }}
            </div>
        </div>

        <div class="button__fon">
            <my-del-button
                :method="deleteMembersFromGroup"
                :params="[member]"
            > x </my-del-button>
        </div>

        

    </div>



</template>


<script>
import { mapMutations } from 'vuex';
import MyDeliteButton from '@/components/UI/MyDeliteButton.vue'
export default {
    data() {
        return {
            name: 'member-card',
            delete__members: false
        }
    },
    components:{
        MyDeliteButton
    },
    props: {
        member: {
            type: Object,
            required: true
            }
    },
    methods:{
        deleteMembersVisible() {
            this.delete__members = true
        },
        deleteMemebersUnVisible() {
            this.delete__members = false
        },
        ...mapMutations({
            delMembers: 'main/delMembers'
        }),
        deleteMembers() {
            this.delMembers(this.member)
        },
        deleteMembersFromGroup() {
            this.$emit('deleteMembersFromGroup')
        }
    }
}

</script>



<style>

.member__card {

position: relative;
width: 280px;
height: 88px;
display: flex;
align-items: center;

background: #131212;
border-radius: 8px;
padding-left: 20px;
margin-bottom: 10px;
cursor: pointer;
transition: background 0.3s;

}

.member__card:hover {
    background: #1a1a1a;

}

.member__photo {
width: 52px;
height: 52px;
background: #D9D9D9;
border-radius: 20px;
margin-right: 15px;

}

.members__content {
    display: block;
    align-items: center;
    justify-content: column;
}
    
.member__name {
font-family: 'Advent Pro';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
color: #FFFFFF;
}

.member__role {
    font-family: 'Advent Pro';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
color: #f5cf13;
}

.button__fon {
    width: 80%;
    position: absolute;
    text-align: end;
    
}



</style>