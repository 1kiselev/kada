<template>
    <div class="my_login" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="login_content">
            <slot></slot>
        </div>
    </div>
</template>



<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
    name: 'my-login',
    mixins: [toggleMixin]
}
</script>



<style>

    .my_login {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(22, 22, 22, 0.8);
        position: fixed;
        z-index: 9999;
    }

    .login_content {
        border: 1px white solid;
        margin: 10% auto;
        padding: 10px;
        width: 454px;
        border-radius: 8px;
        background-color: rgba(17, 17, 17, 1);
    }

    @media screen and (max-width: 1600px) {
        .login_content {
            width: 400px;
            border: 0.5px white solid;
        }
    }

</style>

