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
        timeStamp: '10:00',
        user: 'Peste',
        value: 'oi turo bom? e você eu tobem',
      },
      {
        id: 1,
        timeStamp: '10:15',
        user: 'cu',
        value: 'oi turo bom tebe e você? e você eu tobem lol',
      },
      {
        id: 2,
        timeStamp: '10:15',
        user: 'Peste',
        value: 'decidi debugar no devtools do internet explorer só de zoa mano xD',
      },
      {
        id: 3,
        timeStamp: '10:26',
        user: 'cu',
        value: 'kkk',
      },
      {
        id: 4,
        timeStamp: '10:26',
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
      console.log('message', message);
    },
  },
  methods: {
    sendMessageHandler(value) {
      this.$socket.client.emit('newChatMessage', value);
    },
  },
};
</script>
