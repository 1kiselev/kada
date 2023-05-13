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
                id: 2,
                chatRoomId: 1,
                userGroupId: 2,
                text: 'Hello, David! How are you?'
            },
            {
                id: 3,
                chatRoomId: 1,
                userGroupId: 1,
                text: 'I am fine! And you?'
            },
            ],
        }

    }),

    getters: {
        getMessages(state){
            return state.chatRoom.messages
        }
    },

    mutations: {
        addMessage(state, new_message){
            console.log(new_message)
            state.chatRoom.messages.push( {
                id: state.chatRoom.messages.length,
                chatRoomId: 1,
                userGroupId: 1,
                text: new_message,
            })
        }
        
    },

    actions: {
        
    },

    namespaced: true
}