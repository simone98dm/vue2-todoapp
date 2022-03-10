<template>
  <div v-if="localItem">
    <div v-if="showInput" class="text__input">
      <Input
        :value="localItem.message"
        :label="`Message`"
        v-on:change="(str) => (localItem.message = str)"
      ></Input>
      <Button
        :clickEvent="onSaveHandler"
        :text="`Confirm`"
        :variant="`btn__success`"
      ></Button>
    </div>
    <div v-else>
      <h1 class="title" v-on:click="showInput = !showInput">
        {{ localItem.message }}
      </h1>
    </div>
  </div>
</template>

<script>
import { EVENTS } from "@/common/Constants";
import Button from "./Button.vue";
import Input from "./Input.vue";
export default {
  name: "TextInputComponent",
  props: {
    item: {
      type: Object,
    },
    disableTextInput: {
      type: Boolean,
    },
  },
  mounted() {
    this.localItem = this.item;
    this.showInput = this.disableTextInput;
  },
  data() {
    return {
      showInput: false,
      localItem: null,
    };
  },
  methods: {
    onClickHandler() {
      this.showInput = !this.showInput;
    },
    onSaveHandler() {
      this.showInput = !this.showInput;
      this.localItem.modifiedDate = new Date().getTime();
      this.$emit(EVENTS.TEXTSAVE, this.localItem);
    },
  },
  components: { Button, Input },
};
</script>
<style scoped>
.title {
  margin: 5px;
}
.text__input {
  margin: 15px;
}
</style>