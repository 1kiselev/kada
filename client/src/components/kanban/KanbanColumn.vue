<template>
  <div class="kanban-column">
    <div class="bar">
        {{ this.name }}
    </div>
    <div class="content__kanban">
        <kanban-card
            v-for="task in tasks"
            :key="task.name"
            :task="task"
        ></kanban-card>
    </div>
  </div>
</template>

<script>

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import KanbanCard from './KanbanCard.vue'

export default {

    components: {
        KanbanCard
    },
    
    props: {
        name:{
            type: String,
            required: true,
        },
        status:{
            type: String,
            required: true
        },
        tasks: {
            type: Object,
            required: true,
        }
        
    },
    
}
</script>

<style>
.kanban-column{
    width: 300px;
    margin: 10px;
    /* background: red; */
    border: solid 5px;
    border-color: #949494;
}
.bar{
    color: #ffffff;
    font-size: larger;
    margin: 10px;
}

</style>