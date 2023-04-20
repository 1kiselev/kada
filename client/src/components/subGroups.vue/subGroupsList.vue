<template>
    <div class="subGroup__list">
    
        <div class="subGroup_list_content">
            <subGroup-card
            v-for="subGroup in subGroups"
            :subGroup="subGroup"
            :key="subGroup.name"
            ></subGroup-card>
        </div>
    </div>
</template>
    
    <script>

  import subGroupCard from './subGroupCard.vue';
    
    export default {
        data() {
            return {
                name: 'subGroups-list'
            }
        },
        components: {
            subGroupCard
        },
        props: {
            subGroups: {
                type: Object,
                required: true
            }
        },
    }
    
    
    </script>
    
    
    
    <style>
    .subGroup__list {
        width: 353px;
        height: 699px;
        display: flex;
        justify-content: center;
    }
    </style>