import axios from "axios"

axios.defaults.baseURL = 'http://localhost:5000/'

export const mainStore = {
    state: () => ({
        user: {
            email: '',
            username: '',
        },
        token: '',
        group: {
            id: '',
            name: '',
            description: '',
            members: [
                {
                    id: '',
                    email: '',
                    username: 'qstone',

                }
            ],
            subGroups: [
                {
                    name: 'mySubGorup',
                    members: [],
                    task: 'do a new work',
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
        getSubGroupsLength(state) {
            return state.subGroups.length
        },
        getMembers(state) {
            return state.group.members
        },
        getMembersLength(state) {
            return state.group.members.length
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
        updateMembersGroup(state, members){
            state.group.members = members
        },
        setSubGroupData(state, subgroupData) {
            state.subgroup.name = subgroupData.name
            state.subgroup.members = subgroupData.members
            state.subgroup.task = subgroupData.task
        },
        addNewMembers:(state, newMember) => {
            state.group.members.push(newMember)
        },
        delMembers:(state, index,) => {
            state.group.members.splice(index, 1)

        },
        addNewSubgroups:(state, newSubgroups) => {
            state.group.subGroups.push(newSubgroups)
        },
        delSubgroups:(state, index) => {
            state.group.subGroups.splice(index, 1)
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
                })
                localStorage.setItem('token', response.data.token)
                commit('setUserData', { email: data.email, username: response.data.username })
                commit('setToken', response.data.token)
            } catch (error) {
                console.log(error)
            }
        },

        // async createGroup({state, commit},data)  {
        //     try {
        //         const response = await axios.post('groups', {
        //             name: state.group.name,
        //             description: state.group.description,
        //             creator: state.user.email
        //         })
        //         console.log(response.data)
        //         commit('setGroupData', response.data.group)
        //         commit('updateMembersGroup', response.data.members)
        //         console.log('Успешно')
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },
        async get_members({state, commit}, data) {
            try{
                await axios.get('', {
                    id: state.group.id,
                })
                console.log(respons)
                commit('setGroupData', response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async ADD_MEMBER_GROUP({commit, state}, newMember) {
            try{
                const response = await axios.post('groups/addUser', {
                    user_email: newMember,
                    group_id: state.group.id
                })
                commit('updateMembersGroup', response.data.members)
            } catch (error) {
                console.log(error)
            }
        },
        DELETE_MEMBER_GROUP({commit}, index) {
            commit('delMembers', index)
        },
        DELETE_SUBGROUP({commit}, index) {
            commit('delSubgroups', index)
        }
    },

    namespaced: true
}