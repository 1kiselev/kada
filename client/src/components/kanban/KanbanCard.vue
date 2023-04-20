<template>
  <div class="kanban-card">
    <div class="urgency-bar"></div>
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
    border-color: #949494;
    border-radius: 5%;
    /* background: teal; */
    margin: 15px;
}

.urgency-bar{
    width: 5px;
    height: 50px;
    border-radius: 5%;
    background-color: #DB3A34;

}
.card-content{
    margin: 5px;
    width: 200px;

}

.name{
    color: #ffffff;
    font-size: larger;  
    margin: 10px;
}

.deadline{
    color: #ffffff;
    font-size: large;
    margin: 10px;
}

.status{
    color: #ffffff;
    font-size: medium;
    margin: 10px;
}

</style>