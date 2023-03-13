<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>



<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}

</script>



<style>

.input {
    width: 375px;
    height: 49px;
    background: #D9D9D9;
    border-radius: 8px;
    border-width: 0px;
    outline: none;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-left: 10px;
    transition: 0.4s;
}

::placeholder {
    font-size: 16px;
    opacity: 0.5;
}


</style>

