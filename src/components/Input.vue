<template>
  <div class="input">
    <label :v-for="_id" class="text-xl font-bold py-4">{{ this.label }}</label>
    <input
      type="text"
      :id="_id"
      class="w-full bg-white border-2 border-gray-300 shadow-lg px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
      v-model="message"
      v-on:change="onChangeHandler"
    />
  </div>
</template>

<script>
import { EVENTS } from "@/common/Constants";
import { makeid } from "@/common/Common";
export default {
  name: "InputComponent",
  props: {
    change: {
      type: Function,
    },
    label: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  beforeMount() {
    this.message = this.value;
    this._id = makeid(6);
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    onChangeHandler() {
      this.$emit(EVENTS.INPUTCHANGE, this.message);
    },
  },
};
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}
.text__input {
  padding: 5px;
  margin: 5px;
  font-size: 1.27em;
  border-radius: 5px;
}
</style>