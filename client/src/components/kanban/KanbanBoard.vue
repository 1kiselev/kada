<template>
    <div class="kanban-board">
      <div class="colums">
          <kanban-column
          :name="'Открыто'"
          :status="'Open'"
          ></kanban-column>
          <kanban-column
          :name="'В процессе'"
          :status="'InProgress'"
          ></kanban-column>
          <kanban-column
          :name="'На проверке'"
          :status="'InTest'"
          ></kanban-column>
          <kanban-column
          :name="'Выполнено'"
          :status="'Done'"
          ></kanban-column>
      </div>
    </div>
  </template>
  
  <script>
  
  import KanbanColumn from './KanbanColumn.vue'
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  // import KanbanColumn from '@/components/kanban/KanbanColumn.vue'
  
  export default {
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
      background: #4d4d4d ;
      color: #FFFAFB;
      width: 1300px;
      height: 699px;
  }
  
  .colums{
      display: flex;
  }
  
  </style>