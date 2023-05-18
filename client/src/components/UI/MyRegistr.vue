<template>
    <div class="registr" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="registr__content">
            <slot></slot>
        </div>
    </div>
</template>



<script>
import toggleMixin from '@/mixins/toggleMixin';
export default {
    name: 'my-registr',
    mixins: [toggleMixin]
}
</script>



<style>
.registr {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(22, 22, 22, 0.8);
    position: fixed;
    z-index: 9999;
}

.registr__content {
    border: 1px white solid;
    margin: 100px auto;
    width: 454px;
    border-radius: 8px;
    background-color: rgba(17, 17, 17, 1);
}

</style>

