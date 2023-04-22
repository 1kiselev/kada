<template>
  <div class="message-item">
    <div class="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, necessitatibus?
    </div>
  </div>
</template>

<script>

export default {

    name: 'MessageItem',

    props:{
        messageData: {
            type: Object, 
            required: true,
        }
    }
}
</script>

<style>

.message-item{
    background: #4d4d4d;
}

</style>