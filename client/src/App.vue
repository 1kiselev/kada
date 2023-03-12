<template>
  
  <div class="app">
    <router-view></router-view>
  </div>

</template>


<script>
import NavBar from './components/NavBar.vue';


export default {
  components: {
    NavBar,
  }
}

</script>


<style>
  *{
      margin: 0;
      padding: 0;
      font-family: 'Advent Pro', sans-serif;

  }

</style>
