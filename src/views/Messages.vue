<template>
  <div v-if="isLoading" class="messages">
    <Loader />
  </div>
  <div v-else class="messages">
    <UserInfo :avatar="userAvatar[0]" :currentUser="currentUser[0]" />
    <MessagesContent />
    <MessagesForm />
  </div>
</template>
<script>
import MessagesForm from "../components/MessagesForm.vue";
import MessagesContent from "../components/MessagesContent.vue";
import UserInfo from "../components/UserInfo.vue";
import Loader from "../components/Loader.vue";
import { mapGetters } from "vuex";

export default {
  name: "Messages",
  components: { MessagesContent, MessagesForm, UserInfo, Loader },
  created() {
    const { id: currUrlConvId } = this.$route.params;
    this.$store.dispatch("fetchCurrentConversation", currUrlConvId);
  },
  computed: {
    ...mapGetters(["isLoading", "conversationsList"]),
    currentUser() {
      const { id: currUrlConvId } = this.$route.params;
      const currentUser = this.conversationsList.filter(
        (item) => item.id == currUrlConvId
      );
      return currentUser;
    },
    userAvatar() {
      const { id: currUrlConvId } = this.$route.params;
      return this.$store.getters.userAvatar(currUrlConvId);
    },
  },
};
</script>

<style scoped>
.messages {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 69%;
}
</style>