<template>
  <div class="kanban-column"
        >
    <div class="bar" 
        :class="this.status"
    >
        {{ this.name }}
    </div>
        <kanban-card
            v-for="task in actualCards"
            :key="task.name"
            :task="task"
            @dragstart="onDragStart($event, task)"
            @dragend="onDragEnd()"
            draggable="true"
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

    data(){
        return {
            // cards: this.actualCards()
        }
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
    font-size: larger;
    margin: 10px;
}


</style>