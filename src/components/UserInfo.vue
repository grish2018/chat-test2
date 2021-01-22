<template>
  <div class="userInfo">
    <img :src="avatar.url" alt="" class="userInfo__avatar" />
    <span class="userInfo__userName">{{ currentUser.name }}</span>
  </div>
</template>


<script>
export default {
  name: "UserInfo",
  props: {
    avatar: {
      type: Object,
      required: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.userInfo {
  display: flex;
  width: 100%;
  height: 15%;
  background: #f3f6f8;
  border: 1px solid #e9edf2;
  box-shadow: 0 0 5px #f9f9ff;
  &__avatar {
    margin: 0 1% 0 1%;
    border-radius: 50%;
  }
  &__userName {
    align-self: center;
  }
}
</style>