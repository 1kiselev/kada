<template>

    <div class="subGroups__Board">
        <div class="subGroups__content" >
            <subGroupsList
            :subGroups="subGroups"
            >
            </subGroupsList>
    
        </div>
    </div>
    
</template>
    
    
<script>
    import subGroupsList from './subGroupsList.vue';
    import { mapGetters} from 'vuex'
    
    export default {
        data() {
            return {
                subGroups: this.getSubGroupsData(),
            }
        },
        components: {
            subGroupsList
        },
        props: {
            show: {
                type: Boolean,
                default: false,
            }
        },
        methods: {
            ...mapGetters({
                getSubGroupsData: 'main/getSubGroupsData',
            })
        }
    
    
    
    }
    
    
    
</script>
    
    
<style>
    
.subGroups__Board {
    width: 353px;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    
}

</style>