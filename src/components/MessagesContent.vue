<template>
  <div class="messagesContent" ref="messagesContainer">
    <div class="messagesContent__wrapper">
      <Message
        v-for="(item, index) in currentConversation"
        :key="index"
        :body="item.body"
        :userId="item.userId"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Message from "./Message.vue";
export default {
  name: "MessagesContent",
  components: { Message },
  mounted() {
    this.$nextTick(() => this.scrollToEnd());
  },
  methods: {
    scrollToEnd: function () {
      const content = this.$refs.messagesContainer;
      content.scrollTop = content.scrollHeight;
    },
  },
  computed: mapGetters(["currentConversation"]),
};
</script>

<style lang="scss" scoped>
.messagesContent {
  height: 78%;
  overflow-y: auto;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 100%;
  }
}
</style>
