<template>
<div class="members__list">

    <div class="members_list_content">
        <memberCard
        v-for="member in members"
        :member="member"
        :key="member.name"
        >

        </memberCard>
    </div>
</div>
</template>

<script>
import memberCard from './memberCard.vue';

export default {
    components: {
        memberCard
    },
    props: {
        members: {
            type: Object,
            required: true
        }
    },
}


</script>



<style>
.members__list {
    width: 353px;
    height: 699px;
    display: flex;
    justify-content: center;
}


</style>