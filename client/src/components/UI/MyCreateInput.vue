<template>
    <div class="form__login">
        <input :value="modelValue" @input="updateInput" class="input__create" type="text">
    </div>
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

.input__create {
    width: 238px;
    height: 37px;
    background: #D9D9D9;
    outline: none;
    border: none;
    border-bottom: 2px solid gray;
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-left: 10px;
    transition: 0.4s;
    color: rgb(0, 0, 0);
    border-radius: 8px;
}

::placeholder {
    font-size: 16px;
    opacity: 0.5;
}


</style>

