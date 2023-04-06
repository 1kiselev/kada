import axios from "axios"

export const mainStore = {
    state: () => ({
        user: {
            email: '',
            password: '',
            username: '',
        },
        token: '',
        subgroup: {
            name: '',
            members: [],
            task: '',
        },
        group: {
            name: '',
            description: '',
            members: []
        }

    }),

    getters: {
        getUsername(state){
            return state.user.username
        },
        getUserData(state){
            return state.user
        },
        getGroupData(state) {
            return state.group
        },
        getSubGroupData(state) {
            return state.subgroup
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
        setGroupData(state, groupData) {
            state.group.name = groupData.name
            state.group.description = groupData.description
            state.group.members = groupData.members
        },
        setSubGroupData(state, subgroupData) {
            state.subgroup.name = subgroupData.name
            state.subgroup.members = subgroupData.members
            state.subgroup.task = subgroupData.task
        }
        
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
        },

        async createGroup({state, commit}) {
            try {
                const response = await axios.post('http://localhost:5000/create/group', {
                    name: state.group.name,
                    description: state.group.description,
                    meembers: state.group.members
                })
                commit('setGroupData', response.groupData.name)
                console.log('Успешно')
            } catch (error) {
                console.log(error)
            }
        },
        async get_members_from_API({state, commit}) {
            try{
                const response = await axios.get('http://localhost:5000/create/group', {
                    members: state.group.members,
                })
                commit('setGroupData', response.groupData.members)
                console.log('Успешно')
            } catch (error) {
                console.log(error)
            }
        }
    },

    namespaced: true
}