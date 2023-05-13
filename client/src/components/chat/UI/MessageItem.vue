<template>
  <div class="message-item">
    <div class="bubbleWrapper">
    <div class="inlineContainer" :class="sentOrRecived()">
      <img class="inlineIcon" src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png">
        {{ messageData.text }}
    </div>
    <!-- <span :class="sentOrRecived">08:41</span> -->
    <!-- <span :class="sentOrRecived()">{{ messageData.usesGroupId }}</span> -->

  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'message-item',

    props:{
        messageData: {
            type: Object, 
            required: true,
        }
    },

    methods: {
        ...mapGetters({
            gerUserGroupData: 'main/getUserGroupData',
        }),
        sentOrRecived(){
            // console.log(this.gerUserGroupData().id)
            // console.log(this.messageData.userGroupId)
           return (this.gerUserGroupData().id === this.messageData.userGroupId) ? 'ownBubble own' : 'otherBubble other'
        }
    }
}
</script>

<style>

/* .message-item{
    background: #4d4d4d;
} */
.bubbleWrapper {
  padding: 10px 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: flex-end;
  color: #fff;
}
.inlineContainer {
  display: inline-flex;
}
.inlineContainer.own {
  flex-direction: row-reverse;
}
.inlineIcon {
  width:20px;
  object-fit: contain;
}
.ownBubble {
  min-width: 60px;
  max-width: 700px;
  padding: 14px 18px;
  margin: 6px 8px;
  background-color: #5b5377;
  border-radius: 16px 16px 0 16px;
  border: 1px solid #443f56;
 
}
.otherBubble {
  min-width: 60px;
  max-width: 700px;
  padding: 14px 18px;
  margin: 6px 8px;
  background-color: #6C8EA4;
  border-radius: 16px 16px 16px 0;
  border: 1px solid #54788e;
  
}
.own {
  align-self: flex-end;
}
.other {
  align-self: flex-start;
}
span.own,
span.other{
  font-size: 14px;
  color: grey;
}
</style>