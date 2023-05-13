<template>
    <div class="message-input">
      <input :value="modelValue" @input="updateInput" class="ms-input">

    </div>
</template>
  
<script>
  export default {
  
      name: 'message-input',
      props: {
          modelValue: [String],
      },
      methods: {
          updateInput(event){
              this.$emit('update:modelValue', event.target.value)
          }
      }
  }
</script>
  
<style>
.message-input{
    
}

.ms-input{
    width: 900px;
    height: 30px;
}

</style>
