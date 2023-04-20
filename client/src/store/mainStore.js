import axios from "axios"

axios.defaults.baseURL = 'http://localhost:5000/'

export const mainStore = {
    state: () => ({
        user: {
            email: '',
            username: '',
        },
        authCheck: false,
        token: '',
        subgroups: {
            subGroup: {
                name: 'mySubGorup',
                members: [],
                task: 'do a new work',
            }
        },
        group: {
            id: '',
            name: '',
            description: '',
            members: [
                {
                    name: 'Qstone 433',
                    role: 'goest'
                },
                {
                    name: 'Alex',
                    role: 'admin'

                },
                {
                    name: 'Jhon',
                    role: 'goest'

                }
            ],
            subGroups: [
                {
                    name: 'mySubGorup',
                    members: [],
                    task: 'do a new work',
                },
                {
                    name: 'mySubGorup1',
                    members: [],
                    task: 'do a new work1',
                },
                {
                    name: 'mySubGorup2',
                    members: [],
                    task: 'do a new work2',
                }
            ]
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
        getSubGroupsData(state) {
            return state.group.subGroups
        },
        getMembers(state) {
            return state.group.members
        },
        authCheck: state => {
            return ('username' in state.user) ? true : false;
        }
    },

    mutations: {
        setUserData(state, userData){
            state.user.email = userData.email
            state.user.username = userData.username
        },
        setAuthCheck() {
            state.authCheck = data.authCheck
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
        async userRegistration({commit}, data){
            try {
                const response = await axios.post('auth/registration', {
                    email: data.email,
                    password: data.password,
                    username: data.username
                })
                console.log(response)
                commit('setToken', response.token)
            } catch (error) {
                console.log(error)
            }
        },

        async userLogin({commit}, data){
            try {
                const response = await axios.post('auth/login', {
                    email: data.email,
                    password: data.password,
                    authCheck: true,
                })
                localStorage.setItem('token', response.data.token)
                commit('setUserData', { email: data.email, username: response.data.username })
                commit('setToken', response.data.token)
            } catch (error) {
                console.log(error)
            }
        },

        async createGroup({state, commit}) {
            try {
                const response = await axios.post('groups', {
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
                const response = await axios.get('create/group', {
                    members: state.group.members,
                })
                commit('setGroupData', response.data.members)
                console.log('Успешно')
            } catch (error) {
                console.log(error)
            }
        }
    },

    namespaced: true
}