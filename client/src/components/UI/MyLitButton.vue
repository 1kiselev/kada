<template>
    <button 
    @click="foo(method, params)" 
    class="btn_lit">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-lit-button',
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
                method(params)
            }
        }
    }
</script>


<style scoped>

.btn_lit{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    
    width: 127.98px;
    height: 43px;
    
    background: #000000;
    border: 1px solid #ffffff;
    border-radius: 8px;
    transition: 0.3s;
    cursor: pointer;
    color: white;
}

.btn_lit:hover {
    background: rgb(34, 34, 34);
}

</style>