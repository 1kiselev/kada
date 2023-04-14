import axios from "axios"

export const kadaTools = {
    state: () => ({
        kanban: {
            id: 1,
            group_id: 5,
            tasks: [
                {
                    taskId: '',
                    name: 'Task 1',
                    deadline: '20.03.2023 - 20.04.2023',
                    implementers: [ 'sasha@mail.com', 'david@mail.com' ],
                    urgency: 'green',
                    status: 'Open',
                },
                {
                    taskId: '',
                    name: 'Task 2',
                    deadline: '08.04.2023 - 20.04.2023',
                    implementers: [ 'sasha@mail.com' ],
                    urgency: 'red',
                    status: 'InProgress',
                },
                {
                    taskId: '',
                    name: 'Task 3',
                    deadline: '20.03.2023 - 20.04.2023',
                    implementers: [ 'david@mail.com' ],
                    urgency: 'yellow',
                    status: 'InTest',
                },
                {
                    taskId: '',
                    name: 'Task 4',
                    deadline: '20.03.2023 - 01.04.2023',
                    implementers: [ 'sasha@mail.com', 'david@mail.com' ],
                    urgency: 'red',
                    status: 'Done',
                },
            ]
        } ,


    }),

    getters: {
        getKanban(state){
            return state.kanban;
        },

        getTasks(state){
            return state.kanban.tasks
        },
        
    },

    mutations: {
        setKanban(state, kanban_str){
            state.kanban = JSON.parse(kanban_str)
        },

        setKanbanId(state, kanban_id){
            state.kanban.id = kanban_id
        },
        
        setTasks(state, data){
            state.kanban.tasks = data
        },

        changeStatus(state, data){
            state.kanban.tasks.forEach(task => {
                if (task.name === data.taskName) {
                    task.status = data.newStatus
            }
        });
        }, 

        addNewTask(state, data){
            state.kanban.tasks.push(
            {
                id: '',
                name: data.name,
                deadline: data.deadline,
                implementers: data.implementers,
                urgency: data.urgency,
                status: data.status,
            }
            )
        },

        setTaskId(state, data ){
            state.kanban.tasks.forEach(task => {
                if (task.name === data.taskName) {
                    task.id = data.id
                }
            })
        },
    },

    actions: {
        async createKanban({state, commit}, data){
            try {
                const response = await axios.post('http://localhost:5000/tools/kanban', {
                    gtoup_id: state.group_id,
                })
                console.log(response)
                commit('setKanbanId', response.data.id)
            } catch (error) {
                console.log(error)
            }
        },
        async createTask({state, commit}, data){
            commit('addNewTask', data);
            try {
                const response = await axios.post('http://localhost:5000/tools/kanban/createTask', {
                    kanbanId: state.kanban.id,
                    name: data.name,
                    deadline: data.deadline,
                    urgency: data.urgency,
                    status: data.status,
                    implementers: data.implementers,
                })
                console.log(response)
                commit('setTaskId', { taskName: response.data.name, id: response.data.id })
            } catch (error) {
                console.log(error)
            }
        },
        async updateKanban({state, commit}, data){

        },
        async getTasks({state, commit}, data){
            try {
                await axios.get('', {
                    id: state.kanban.id
                })
                console.log(response)
                commit('setTasks', response.data)
            } catch (error) {
                console.log(error)
            }
        },
    },

    namespaced: true
}