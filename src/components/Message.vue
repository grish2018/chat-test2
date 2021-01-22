<template>
  <div :class="classToggle">
    <div class="messageContent">
      <div class="messageContent__wrapper">
        <p class="messageContent__body">{{ body }}</p>
      </div>
      <div class="messageContent__info"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  computed: {
    classToggle: function () {
      const { id: currUrlConvId } = this.$route.params;
      return this.userId == currUrlConvId ? "otherUser" : "me";
    },
  },
  props: {
    body: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
  },
};
</script>


<style lang="scss" scoped>
.me {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 8px;
}
.otherUser {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 8px;
}
.messageContent {
  width: 60%;
  display: flex;
  flex-direction: column;
  &__wrapper {
    background: #e9f5f4;
    border-radius: 8px 8px 8px 8px;
    display: inline-block;
    padding: 0px 6px;
  }
  &__body {
    overflow-wrap: anywhere;
    font-size: 14px;
    line-height: 141.62%;
    color: #475453;
  }
}
</style>