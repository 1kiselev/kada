import axios from "axios"

export const mainStore = {
    state: () => ({
        user: {
            email: '',
            password: '',
            username: '',
        },
        token: '',

    }),

    getters: {
        getUsername(state){
            return state.user.username
        },

        getUserData(state){
            return state.user
        }
    },

    mutations: {
        setUserData(state, userData){
            state.user.email = userData.email
            state.user.password = userData.password
            state.user.username = userData.username
        },

        setToken(state, token){
            state.token = token
        },
        setUserPassMail(state, data){
            state.user.email = data.email
            state.user.password = data.password
        },
        setUserName(state, username){
            state.user.username = username
        },
        
    },

    actions: {
        async userRegistration({state, commit}){
            try {
                const response = await axios.post('http://localhost:5000/auth/registration', {
                    email: state.user.email,
                    password: state.user.password,
                    username: state.user.username
                })
                
                commit('setToken', response.token)
            } catch (error) {
                console.log(error)
            }
        },

        async userLogin({state, commit}){
            try {
                const response = await axios.post('http://localhost:5000/auth/login', {
                    email: state.user.email,
                    password: state.user.password,
                })
                commit('setToken', response.token)
                commit('setUsername', response.username)
                console.log("Успешно")
            } catch (error) {
                console.log(error)
            }
        }
    },

    namespaced: true
}