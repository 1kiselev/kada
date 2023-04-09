<template>
  <div class="kanban-board">
    <div class="colums">
        <kanban-column
        :name="'Открыто'"
        :status="'Open'"
        :tasks="open"
        ></kanban-column>
        <kanban-column
        :name="'В процессе'"
        :status="'InProgress'"
        :tasks="inProgress"
        ></kanban-column>
        <kanban-column
        :name="'На проверке'"
        :status="'InTest'"
        :tasks="inTest"
        ></kanban-column>
        <kanban-column
        :name="'Выполнено'"
        :status="'Done'"
        :tasks="done"
        ></kanban-column>
    </div>
  </div>
</template>

<script>

import KanbanColumn from './KanbanColumn.vue'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
// import KanbanColumn from '@/components/kanban/KanbanColumn.vue'

export default {
    data(){
        return{
            open: this.getTasks().filter(task => task.status === 'Open'),
            inProgress: this.getTasks().filter(task => task.status === 'InProgress'),
            inTest: this.getTasks().filter(task => task.status === 'InTest'),
            done: this.getTasks().filter(task => task.status === 'Done'),
        }
    },
    components: {
        KanbanColumn
    },
    methods: {
        ...mapGetters({
            getTasks: 'tools/getTasks',
        })
    }


}
</script>

<style>
.kanban-board{
    background: #FFFAFB;
    width: 1300px;
    height: 699px;
}

.colums{
    display: flex;
}

</style>