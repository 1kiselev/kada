<template>
    <div class="edit" v-show="show"  @click.stop="hideDialog">
        <div @click.stop class="edit__content">
            <slot></slot>
        </div>
    </div>
</template>



<script>
import toogleMixin from '@/mixins/toggleMixin';

export default {
    name: 'edit-group',
    mixins: [toogleMixin],
}
</script>



<style>
.edit {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(22, 22, 22, 0.8);
    position: fixed;
    z-index: 9999;
}

.edit__content {
    border: 1px white solid;
    margin: 100px auto;
    border-radius: 8px;
    background-color: rgba(17, 17, 17, 1);
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;


}

</style>

