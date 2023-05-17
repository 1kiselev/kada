<template>
  <button class="send-button" @click="foo()">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'send-button',
    
    props: {
        method: {
            type: Function,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        }

    },

    methods: {
        foo(){
            console.log(this.options)
            this.method(...this.options)
        }
    }

}
</script>

<style>
.send-button{
    width: 100px;
    height: 30px;
    background: teal;
    color: aliceblue;
    
}
</style>