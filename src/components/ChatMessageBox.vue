<template>
  <v-sheet
    width="100%"
    height="auto"
    elevation="2"
    class="message-box--wrapper"
    >
    <div class="message-box--header">
      <span class="message-box--header--user">
        {{ user }}
      </span>
      <span class="message-box--header--timestamp">
        {{ formattedTimestamp }}
      </span>
    </div>
    <span class="message-box--content">
      {{ value }}
    </span>
  </v-sheet>
</template>

<script>
export default {
  name: 'ChatMessageBox',
  props: {
    timeStamp: String,
    user: String,
    value: String,
  },
  computed: {
    formattedTimestamp() {
      return ` - ${this.timeStamp} :`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .message-box--wrapper {
    margin: 0.5rem 0;
    padding: 0.75rem 1rem;
    background-color: #099be5;

    .message-box--header {
      color: #311b92;

      .message-box--header--user {
        font-weight: 500;
      }
      .message-box--header--timestamp {
        font-weight: 300;
      }
    }
    .message-box--content {
      font-weight: 300;
      color: #fff;
    }
  }
</style>
