<template>
  <div class="messagesForm">
    <form @submit.prevent="sendMessage">
      <textarea
        @keydown.enter.exact.prevent
        @keyup.enter.exact="sendMessage"
        v-model="newText"
        placeholder="Введите текст..."
      ></textarea>
      <div class="messagesForm__vector">
        <button type="submit">
          <Vector />
        </button>
      </div>
    </form>
  </div>
</template>


<script>
import Vector from "@/assets/vector.svg";
import { mapMutations } from "vuex";
export default {
  name: "MessagesForm",
  components: { Vector },
  data() {
    return {
      newText: "",
    };
  },
  methods: {
    ...mapMutations(["setNewMessage"]),
    sendMessage() {
      if (this.newText.trim()) {
        this.setNewMessage({
          id: 1,
          userId: 1994,
          body: this.newText,
        });
        this.newText = "";
      } else {
        return false;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.messagesForm {
  height: 12%;
  width: 100%;
  display: flex;

  & form {
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  & textarea {
    padding: 30px;
    resize: none;
    outline: none;
    border: none;
    width: 88%;
    height: 100%;
    box-sizing: border-box;
    border-top: 2px solid #e9edf2;
    font-family: "Roboto", sans-serif;
    font-size: 1em;
  }
  &__vector {
    width: 12%;
    height: 100%;
    background: #398bff;
  }
  & button {
    width: 100%;
    height: 100%;
    box-shadow: inset 0px -3px 7px 0px #29bbff;
    background-color: #398bff;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover {
      background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
      background-color: #0688fa;
    }
  }
  ::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 1em;
  }
}
</style>