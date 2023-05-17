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

.form__login {
    width: 100%;
    display: flex;
    justify-content: center;
}

.input {
    width: 80%;
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

@media screen and (min-device-width: 1600px) {

}
</style>

