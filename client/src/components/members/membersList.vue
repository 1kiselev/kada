<template>
<div class="members__list">

    <div class="members_list_content">
        <memberCard
        v-for="(member, index) in actualMembers"
        :member="member"
        :key="member.username"
        @deleteMembersFromGroup="deleteMembersFromGroup(index)"
        >
        </memberCard>
    </div>
</div>
</template>

<script>
import memberCard from './memberCard.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        memberCard
    },
    methods:{
        ...mapActions ({
        ADD_MEMBER_GROUP: 'main/ADD_MEMBER_GROUP',
        DELETE_MEMBER_GROUP: 'main/DELETE_MEMBER_GROUP'
    }),
    ...mapGetters({
        getMembers: 'main/getMembers'
    }) ,    
    // addNewMembers(members) {
    //     this.ADD_MEMBER_GROUP(members)
    // }
    deleteMembersFromGroup(index) {
        this.DELETE_MEMBER_GROUP(index)
    }
    },

    computed:{
        actualMembers() {
            console.log('work')
            return this.getMembers()
        }
    }
}


</script>



<style>
.members__list {
    width: 353px;
    display: flex;
    justify-content: center;
}


</style>