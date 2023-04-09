import axios from "axios"

export const kadaTools = {
    state: () => ({
        kanban: {
            id: 0,
            name: 'Kanban 1',
            tasks: [
                {
                    name: 'Task 1',
                    deadline: '20.03.2023 - 20.04.2023',
                    implementers: [ 'sasha@mail.com', 'david@mail.com' ],
                    urgency: 'green',
                    status: 'Open',
                },
                {
                    name: 'Task 2',
                    deadline: '08.04.2023 - 20.04.2023',
                    implementers: [ 'sasha@mail.com' ],
                    urgency: 'red',
                    status: 'InProgress',
                },
                {
                    name: 'Task 3',
                    deadline: '20.03.2023 - 20.04.2023',
                    implementers: [ 'david@mail.com' ],
                    urgency: 'yellow',
                    status: 'InTest',
                },
                {
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
        // getTasksByStatusOpen(state, getters){
        //     return getters.getTasksByStatus('Open')
        // },
        // getTasksByStatusInProgress(state, getters){
        //     return getters.getTasksByStatus('InProgress')
        // },
        // getTasksByStatusInTest(state, getters){
        //     return getters.getTasksByStatus('InTest')
        // },
        // getTasksByStatusDone(state, getters){
        //     return getters.getTasksByStatus('Done')
        // }
        
    },

    mutations: {
        setKanban(state, kanban_str){
            state.kanban = JSON.parse(kanban_str)
        },

        changeStatus(state, taskName, newStatus){
            state.kanban.tasks.every(task => {
                if (task.name === taskName) {
                    task.status = newStatus
                    return true
                    }
                }
            )
        }
    },

    actions: {
        
    },

    namespaced: true
}