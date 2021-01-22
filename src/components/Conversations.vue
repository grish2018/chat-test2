<template>
  <div class="conversations">
    <div class="conversations__header">
      <div>
        <span class="conversations__title">Диалоги</span>
      </div>
      <div>
        <span class="conversations__amount">{{
          conversationsList.length
        }}</span>
      </div>
    </div>
    <div class="conversations__wrapper">
      <ConversationItem
        v-for="conv in conversationsList"
        :key="conv.id"
        :id="conv.id"
        :name="conv.name"
      />
    </div>
  </div>
</template>

<script>
import ConversationItem from "./ConversationItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "Conversations",

  components: { ConversationItem },
  computed: {
    ...mapGetters(["conversationsList"]),
  },
};
</script>


<style lang="scss" scoped>
.conversations {
  flex-flow: column nowrap;
  display: flex;
  flex-direction: column;
  background: #f3f6f8;
  width: 30%;
  overflow-y: auto;

  &__header {
    display: flex;
    height: 10%;
    border-bottom: 1px solid #e9edf2;
    align-items: center;
  }
  &__wrapper {
    width: 100%;
    height: 90%;
    overflow-y: auto;
  }
  &__title {
    margin-left: 40px;
    font-size: 14px;
    line-height: 40px;
    color: #656b77;
  }
  &__amount {
    margin-left: 45%;
    font-size: 14px;
    line-height: 40px;
    color: #d2d8de;
  }
}
</style>
