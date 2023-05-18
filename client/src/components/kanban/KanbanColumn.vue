<template>
    <div class="kanban-column"
          >
      <div class="bar" 
          :class="this.status"
      >
          {{ this.name }}
      </div>
      <div class="column-content "
          @drop="onDrop($event, this.status)"
          @dragover.prevent
          @dragenter.prevent>
          
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
      
      methods:{
          ...mapGetters({
              getTasks: 'tools/getTasks'
          }),
          ...mapMutations({
              changeStatus: 'tools/changeStatus'
          }),
  
          onDragStart(e, card){
              e.dataTransfer.dropEffect = 'move'
              e.dataTransfer.effectAllowed = 'move'
              e.dataTransfer.setData('cardName', card.name)
              e.dataTransfer.setData('cardStatus', card.status)
          },
  
          onDrop(e){
              const cardStatus = e.dataTransfer.getData('cardStatus')
              const cardName = e.dataTransfer.getData('cardName')
              const data = {'taskName': cardName, 'newStatus': this.status}
              this.changeStatus(data)
        }
      },
  
      computed: {
          actualCards() {
              return this.getTasks().filter(task => task.status === this.status)
          }
      }
      
   
      
  
  }
  </script>
  
  <style>
  .kanban-column{
      width: 300px;
      margin: 10px;
      /* background: red; */
      border: solid 5px;
      border-color: #323031;
  }
  .bar{
      font-size: larger;
      margin: 10px;
  }
  
  .column-content {
      color: white;
      height: 582px;
      align-items: center;
  }
  
  .Open{
      color: white;
  }
  
  .InProgress{
      color: rgb(142, 142, 231);
  }
  
  .InTest{
      color: #FFC857;
  }
  
  .Done{
      color: #177E89;
  }
  
  </style>