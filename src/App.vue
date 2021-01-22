<template>
  <div v-if="isLoading" id="app">
    <Loader class="loader"></Loader>
  </div>
  <div v-else id="app">
    <Conversations />
    <router-view />
  </div>
</template>

<script>
import Conversations from "./components/Conversations.vue";
import Loader from "./components/Loader.vue";
export default {
  name: "App",
  components: { Conversations, Loader },
  async created() {
    this.isLoading = true;
    await this.$store.dispatch("fetchConversationsList");
    await this.$store.dispatch("fetchAvatars");
    this.isLoading = false;
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
#app {
  display: flex;
  width: 100%;
  height: 100vh;
}
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #f9f9ff;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #dededf;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #7d7d84;
}
</style>
