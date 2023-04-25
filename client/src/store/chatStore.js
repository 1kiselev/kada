import axios from "axios"

export const chatStore = {
    state: () => ({
        chatRoom: {
            id: 1,
            name: 'Chat 1',
            descrtiption: 'bla bla bla bla bla',
            creator: 'alexandr@mail.com',
            groupId: 1,
            users: [],
            messages: [
            {
                id: 1,
                chatRoomId: 1,
                userGroupId: 1,
                text: 'Hello, Alexandr! My name is David.'
            },
            {
                id: 1,
                chatRoomId: 1,
                userGroupId: 2,
                text: 'Hello, David! How are you?'
            },
            {
                id: 1,
                chatRoomId: 1,
                userGroupId: 1,
                text: 'I am fine! And you?'
            },
            ],
        }

    }),

    getters: {
        getMessages(state){
            return state.messages
        }
    },

    mutations: {
        addMessage(state, new_message){
            state.messages.push(new_message)
        }
        
    },

    actions: {
        
    },

    namespaced: true
}