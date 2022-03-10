<template>
  <div v-if="item" :class="`card`" v-on:click="onCardClickHandler">
    <!-- <Badge
      :text="`Completed: ${item.isCompleted}`"
      :variant="item.isCompleted ? 'green' : 'red'"
    ></Badge> -->
    <TextInput
      :item="this.item"
      :disableTextInput="disableTextInput"
      v-on:textsave="onSaveHandler"
    ></TextInput>
    <div class="card__footer">
      <Button
        :variant="item.isCompleted ? `purple` : `blue`"
        :text="item.isCompleted ? `Not complete` : `Complete`"
        :clickEvent="onCompleteClickHandler"
      ></Button>
      <Button
        :variant="`red`"
        :text="'Delete'"
        :clickEvent="onDeleteClickHandler"
      ></Button>
      <p class="text__footer" v-if="this.date">{{ this.date }}</p>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
// import Badge from "./Badge.vue";
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
  components: { Button, TextInput },
};
</script>

<style scoped>
.card {
  padding: 16px;
  background-color: #fff;
  border-radius: 7px;
  margin: 5px 0;
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
.green {
  background-color: #2ecc71;
  transition: .2s;
}
.red {
  background-color: #e74c3c;
  transition: .2s;
}
.card__footer {
}
.text__footer {
  color: #aeaeae;
  font-style: italic;
  float: right;
}
</style>