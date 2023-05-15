<template>
    <div class="subGroup__list">
    
        <div class="subGroup_list_content">
            <subGroup-card
            v-for="(subGroup, index) in subGroups"
            :subGroup="subGroup"
            :key="subGroup.name"
            @deleteMSubGroupFromGroup="deleteMSubGroupFromGroup(index)"
            ></subGroup-card>
        </div>
    </div>
</template>
    
    <script>

  import { mapActions } from 'vuex';
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
        methods:{
            ...mapActions({
                DELETE_SUBGROUP: 'main/DELETE_SUBGROUP'
            }),
            deleteMSubGroupFromGroup(index) {
                this.DELETE_SUBGROUP(index)
            }
        }
    }
    
    
    </script>
    
    
    
    <style>
    .subGroup__list {
        width: 353px;
        display: flex;
        justify-content: center;
    }
    </style>