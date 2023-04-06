<template>
    <div class="form__login">
        <input :value="modelValue" @input="updateInput" class="input">
    </div>
</template>





<script>
export default {
    name: 'my-input-create',
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
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid gray;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-left: 10px;
    transition: 0.4s;
    color: white;
}

.input:focus {
    border-bottom: 2px solid white;
}

::placeholder {
    font-size: 16px;
    opacity: 0.5;
}


</style>

