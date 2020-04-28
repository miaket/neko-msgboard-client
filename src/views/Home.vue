<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <ChatMessageBox
      v-for="chatMessageElement in chatMessageArray"
      :key="chatMessageElement.message.id"
      :timeStamp="chatMessageElement.message.timeStamp"
      :user="chatMessageElement.message.user"
      :value="chatMessageElement.message.content"
    />

    <v-text-field
      v-model="message.content"
      label="Title"
      counter
      solo
    ></v-text-field>
    <v-btn @click="sendMessageHandler(message)">send</v-btn>
  </div>
</template>

<script>
import ChatMessageBox from '@/components/ChatMessageBox.vue';

export default {
  name: 'Home',
  components: {
    ChatMessageBox,
  },
  data: () => ({
    message: {
      content: '',
      user: 'peste',
    },
    chatMessageArray: [
      {
        message: {
          id: 0,
          timeStamp: 1587709093651,
          user: 'Peste',
          content: 'oi turo bom? e você eu tobem',
        },
      },
      {
        message: {
          id: 1,
          timeStamp: 1587709193651,
          user: 'cu',
          content: 'oi turo bom tebe e você? e você eu tobem lol',
        },
      },
      {
        message: {
          id: 2,
          timeStamp: 1587709293651,
          user: 'Peste',
          content: 'decidi debugar no devtools do internet explorer só de zoa mano xD',
        },
      },
      {
        message: {
          id: 3,
          timeStamp: 1587709393651,
          user: 'cu',
          content: 'kkk',
        },
      },
      {
        message: {
          id: 4,
          timeStamp: 1587709493651,
          user: 'cu',
          content: 'top 👌',
        },
      },
    ],
  }),
  sockets: {
    connect() {
      console.log('socket connected');
    },
    newChatMessage(message) {
      this.chatMessageArray = [
        ...this.chatMessageArray,
        message,
      ];
    },
  },
  methods: {
    sendMessageHandler({ content, user }) {
      const messagePayload = {
        message: {
          // TODO: message id should be set at mongo thing api
          id: this.chatMessageArray.length,
          timeStamp: new Date().getTime(),
          content,
          user,
        },
      };
      this.$socket.client.emit('newChatMessage', messagePayload);
    },
  },
};
</script>
