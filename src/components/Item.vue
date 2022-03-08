<template>
  <div v-if="item" class="card" v-on:click="onCardClickHandler">
    <Badge
      :text="`${item.isCompleted}`"
      :variant="item.isCompleted ? 'green' : 'red'"
    ></Badge>
    <TextInput
      :item="this.item"
      :disableTextInput="disableTextInput"
      v-on:textsave="onSaveHandler"
    ></TextInput>
    <div class="card__footer">
      <Button
        :variant="`btn__success`"
        :text="'Complete'"
        :clickEvent="onCompleteClickHandler"
      ></Button>
      <Button
        :variant="`btn__error`"
        :text="'Delete'"
        :clickEvent="onDeleteClickHandler"
      ></Button>
      <p class="text__footer" v-if="this.date">{{ this.date }}</p>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Badge from "./Badge.vue";
import { EVENTS } from "@/common/Constants";
import TextInput from "./TextInput.vue";
export default {
  name: "ItemComponent",
  props: {
    item: {
      type: Object,
    },
  },
  mounted() {
    if (this.item.createDate) {
      this.date = new Date(this.item.createDate).toLocaleDateString();
    }
  },
  data() {
    return {
      date: null,
      disableTextInput: false,
    };
  },
  methods: {
    onCompleteClickHandler() {
      this.$emit(EVENTS.COMPLETE, this.item);
    },
    onDeleteClickHandler() {
      this.$emit(EVENTS.DELETE, this.item);
    },
    onSaveHandler(updatedItem) {
      this.$emit(EVENTS.TEXTSAVE, updatedItem);
    },
    onCardClickHandler() {
      this.disableTextInput = true;
    },
  },
  components: { Button, Badge, TextInput },
};
</script>

<style scoped>
.card {
  padding: 16px;
  background-color: #fff;
  border-radius: 7px;
  margin: 5px 0;
  min-height: 150px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.card__title {
  margin: 5px;
  font-weight: 500;
}
.card__content {
  margin: 5px;
}
.card__footer {
  margin: 5px;
}
.label__green {
  color: green;
}
.label__red {
  color: red;
}
.card__footer {
}
.text__footer {
  color: #aeaeae;
  font-style: italic;
  float: right;
}
</style>