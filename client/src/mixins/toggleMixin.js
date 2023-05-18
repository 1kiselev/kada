export default {
    data() {
        return {
            RegistrVisible: false,
            LoginVisible: false,
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        hideDialog(){
            this.$emit('update:show', false)
        },
        showRegistr() {
            this.RegistrVisible = true;
        },
        showLogin() {
            this.LoginVisible = true;
    },    
}
}