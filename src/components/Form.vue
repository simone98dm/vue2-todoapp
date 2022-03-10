<template>
  <div class="form">
    <Input :label="`Title`" v-on:change="(str) => (localMessage = str)"></Input>
    <Button
      :clickEvent="onCreateHandler"
      :text="`Add`"
      :variant="`btn__primary`"
    ></Button>
  </div>
</template>

<script>
import { EVENTS } from "@/common/Constants";
import Button from "./Button.vue";
import Input from "./Input.vue";
export default {
  name: "FormComponent",
  components: { Button, Input },
  data() {
    return {
      localMessage: null,
    };
  },
  methods: {
    onCreateHandler() {
      if (this.localMessage != null) {
        this.$emit(EVENTS.CREATE, this.localMessage);
      }
    },
  },
};
</script>


<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>