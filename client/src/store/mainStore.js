import axios from "axios"

export const mainStore = {
    state: () => ({
        user: {
            email: 'alex1@mail.com',
            username: 'alex1',
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
            state.user.username = userData.username
        },
        setToken(state, token){
            state.token = token
        },
        setUserPassMail(state, data){
            state.user.email = data.email
            state.user.password = data.password
        },
        setUsername(state, username){
            state.user.username = username
        },
        setGroupData(state, groupData) {
            state.group.name = groupData.name
            state.group.description = groupData.description
        },
        setGroupMembers(state, members){
            state.group.members = members
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
                console.log(response)
                commit('setToken', response.token)
            } catch (error) {
                console.log(error)
            }
        },

        async userLogin({state, commit}, data){
            try {
                const response = await axios.post('http://localhost:5000/auth/login', {
                    email: data.email,
                    password: data.password,
                })
                commit('setUserData', { email: data.email, username: response.data.username })
                commit('setToken', response.data.token)
            } catch (error) {
                console.log(error)
            }
        },

        async createGroup({state, commit}) {
            try {
                const response = await axios.post('http://localhost:5000/groups', {
                    name: state.group.name,
                    description: state.group.description,
                    creator: state.user.email
                })
                console.log(response.data)
                commit('setGroupData', response.data.group)
                commit('setGroupMembers', response.data.members)
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