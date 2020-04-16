<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      Hehe
    </v-app-bar>
    <v-content>
      <div id="nav">
        <router-link to="/">Home</router-link> |
      </div>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
