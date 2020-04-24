<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <ChatMessageBox
      v-for="chatMessageElement in chatMessageArray"
      :key="chatMessageElement.id"
      :timeStamp="chatMessageElement.timeStamp"
      :user="chatMessageElement.user"
      :value="chatMessageElement.value"
    />

    <v-text-field
      v-model="value"
      label="Title"
      counter
      solo
    ></v-text-field>
    <v-btn @click="sendMessageHandler(value)">send</v-btn>
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
    value: '',
    timeStamp: '2:31',
    user: 'peste',
    chatMessageArray: [
      {
        id: 0,
        timeStamp: 1587709093651,
        user: 'Peste',
        value: 'oi turo bom? e você eu tobem',
      },
      {
        id: 1,
        timeStamp: 1587709193651,
        user: 'cu',
        value: 'oi turo bom tebe e você? e você eu tobem lol',
      },
      {
        id: 2,
        timeStamp: 1587709293651,
        user: 'Peste',
        value: 'decidi debugar no devtools do internet explorer só de zoa mano xD',
      },
      {
        id: 3,
        timeStamp: 1587709393651,
        user: 'cu',
        value: 'kkk',
      },
      {
        id: 4,
        timeStamp: 1587709493651,
        user: 'cu',
        value: 'top 👌',
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
        {
          timeStamp: 1587709493651,
          user: this.user,
          value: message,
        },
      ];
    },
  },
  methods: {
    sendMessageHandler(value) {
      this.$socket.client.emit('newChatMessage', value);
    },
  },
};
</script>
