<template>
    <input class="input">
</template>



<script>
export default {
    name: 'my-input',
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

