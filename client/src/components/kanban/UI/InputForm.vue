<template>
  <div class="input-form">
    <input :value="modelValue" @input="updateInput" class="input input-task">
  </div>
</template>

<script>
export default {

    name: 'input-form',
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
.input-form{
  /* border-bottom: 2px solid gray;    */

}

.input-task{
  width: 155px !important;
  margin-left: 10px !important;
}

</style>