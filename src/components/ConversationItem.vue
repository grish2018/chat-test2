<template>
  <div
    @click="handleClick"
    class="conversationItem"
    v-bind:class="{ active: isActive }"
  >
    <img
      :src="userAvatar[0].thumbnailUrl"
      alt=""
      class="conversationItem__avatar"
    />
    <div class="conversationItem__title">
      <span class="conversationItem__userName">{{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConversationItem",
  methods: {
    handleClick() {
      const { id: currUrlConvId } = this.$route.params;
      if (currUrlConvId != this.id) {
        this.$router.push({ path: `/${this.id}` });
        this.$store.dispatch("fetchCurrentConversation", this.id);
      }
    },
  },
  computed: {
    userAvatar() {
      return this.$store.getters.userAvatar(this.id);
    },
    isActive() {
      return this.id === Number(this.$route.params.id);
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.conversationItem {
  display: flex;
  height: 14%;
  border: 1px solid #e9edf2;
  cursor: pointer;
  &__avatar {
    border-radius: 50%;
    margin-left: 1%;
  }
  &__title {
    width: 100%;
    display: flex;
    margin-top: 20px;
  }
  &__userName {
    font-size: 14px;
    line-height: 20px;
    color: #35383d;
    margin-left: 40px;
    width: 50%;
  }
  &:hover {
    background: #ffffff;
    border-left: 4px solid #398bff;
  }
}
.active {
  background: #ffffff;
  border-left: 4px solid #398bff;
}
</style>