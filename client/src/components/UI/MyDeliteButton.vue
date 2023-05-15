<template>
    <button 
    type="submit"
    @click="foo(method, params)" 
    class="btn_del">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-del-button',
        props: {
            method: {
                type: Function,
                required: true,
            },
            params: {
                type: Object,
                required: true,
            }
         
        },
        methods: {
            foo(method, params){
                console.log(params)
                method(...params)
            }
        }
    }
</script>


<style scoped>
.btn_del {
    font-size: 25px;
    color: rgb(255, 255, 255);
    transition: color 0.3s;
    text-align: end;
    background: none;
    border: none;
    cursor: pointer;
}

.btn_del:hover {
    color: red;
}


</style>