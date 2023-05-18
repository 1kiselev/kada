<template>
    <div class="kanban-card">
      <div class="urgency-bar"
          :class= "this.task.status + '-bar'"        
      ></div>
      <div class="card-content">
          <div class="name">
              {{ this.task.name }}
          </div>
          <div class="deadline">
              {{ this.task.deadline }}
          </div>
          <div class="status">
              {{ this.task.status }}
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props: {
          task: {
              type: Object,
              required: true,
          }
      }
  }
  </script>
  
  <style>
  
  .kanban-card{
      display: flex;
      width: 250px;
      height: 110px;
      border: solid 5px;
      background: #323031;
      border-color: #323031;
      border-radius: 5%;
      /* background: teal; */
      margin: 15px;
  }
  
  .urgency-bar{
      width: 5px;
      height: 110px;
      border-radius: 15%;
      
  
  }
  .card-content{
      margin: 5px;
      width: 200px;
  
  }
  
  .name{
      color: #FFFAFB;
      font-size: larger;  
      margin: 10px;
  }
  
  .deadline{    
      color: #FFFAFB;
      font-size: large;
      margin: 10px;
  }
  
  .status{
      color: #FFFAFB;
      font-size: medium;
      margin: 10px;
  }
  
  
  .Open-bar{
      background-color: white;
  }
  
  .InProgress-bar{
      background-color: rgb(142, 142, 231);
  }
  
  .InTest-bar{
      background-color: #FFC857;
  }
  
  .Done-bar{
      background-color: #177E89;
  }
  </style>