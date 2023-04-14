<template>
  <div class="create-task-modal">
    <!-- <h3 class="create-header"></h3> -->
    <div class="input-modal">
      <my-span>Название: </my-span>
      <input-form v-model="taskData.name"></input-form>
    </div>
    <div class="input-modal">
      <my-span>Сроки: </my-span>
      <input-form v-model="taskData.deadline"></input-form>
    </div>
    <div class="input-modal">
      <my-span>Исполнители: </my-span>
      <input-form v-model="taskData.implementers"></input-form>
    </div>
    <div class="input-modal">
      <my-span>Срочность: </my-span>
      <input-form v-model="taskData.urgency"></input-form>
    </div>
    <div class="input-modal">
      <my-span>Статус: </my-span>
      <input-form v-model="taskData.status"></input-form>
    </div>
    <my-lit-button 
      class="create-task-btn"
      :method="createTask"
      :params="[this.taskData]"
    >Создать</my-lit-button>
  </div>
</template>


<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  data(){
    return{
      taskData: {
        name: '',
        deadline: '',
        implementers: '',
        urgency: '',
        status: '',
      }
    }
  },
  methods: {
    ...mapActions({
      createTask: 'tools/createTask',
    })
  }

}
</script>

<style>

.input-modal{
  /* display: flex; */
  width: 150px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

}

.create-task-modal{
  width: 300px;
  justify-content: center;
  
}

.create-task-btn{
  width: 120px !important;

}

</style>