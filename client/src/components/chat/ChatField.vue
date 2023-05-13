<template>
  <div class="chat-field">
    <div class="messages">
      <message-item
        v-for="message in actualMessages"
        :key="message.id"
        :messageData="message"
      ></message-item>
    </div>
    <div class="send-msg">
      <message-input v-model="newMessage"></message-input>
      <send-button 
      :method="addMessage"
      :options="[newMessage]"
      >
        Отправить
      </send-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {

  data() {
    return {
        newMessage: '',
    }
  },
    // props: {
    //     messages: {
    //         type: Array,
    //     }
    // },

    methods: {
      ...mapGetters({
        getMessages: 'chat/getMessages'
      }),
      ...mapMutations({
        // sendMessage: 'chat/sendMessage',
        addMessage: 'chat/addMessage',

      })
    },

    computed: {
      actualMessages(){
        // console.log(this.getMessages())
        return this.getMessages()
      }

    }
}
</script>

<style>

.chat-field{
    color: #4d4d4d ;
    background: #FFFAFB;
    width: 1000px;
    height: 699px;
}
.messages{
  height: 600px;
}
.send-msg{
  display: flex;
}
/* * {
  font-family: 'Avenir';
} */

</style>