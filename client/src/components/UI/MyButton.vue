<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>


<style scoped>

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 270px;
    height: 70px;
    background: #000000;
    border: 1px solid #ffffff;
    border-radius: 8px;
    transition: 0.3s;
    cursor: pointer;
}

.btn:hover {
    background: rgb(34, 34, 34);

}

@media screen and (max-device-width: 1600px) {
    .btn {
        width: 230px;
        height: 50px;
    }
}
</style>