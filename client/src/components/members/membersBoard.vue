<template>


<div class="members__Board" v-show="show">
    <div class="members__content" >
        <members-list
        :members="members"
        >
        </members-list>

    </div>


</div>

</template>




<script>
import membersList from './membersList.vue'
import { mapGetters} from 'vuex'

export default {


    data() {
        return {
           members: this.getMembers(),
        }
    },
    components: {
        membersList
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },

    methods: {
        ...mapGetters({
            getMembers: 'main/getMembers',
        })
    }



}



</script>


<style>

.members__Board {
width: 353px;
height: 699px;
display: flex;
justify-content: center;
padding-top: 20px;

}


</style>