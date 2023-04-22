<template>
  <div class="chat-field">
    <div class="messages">
        
    </div>
  </div>
</template>

<script>
export default {

    props: {
        messages: {
            type: Array,
        }
    },

}
</script>

<style>

.chat-field{
    color: #4d4d4d ;
    background: #FFFAFB;
    width: 1300px;
    height: 699px;
}

</style>