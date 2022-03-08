<template>
  <button v-bind:class="`btn ${variant}`" v-on:click="this.clickEvent">
    {{ this.text }}
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    variant: {
      type: String,
    },
    clickEvent: {
      type: Function,
    },
    text: {
      type: String,
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 10px 25px;
  min-width: 100px;
  border: 1px grey solid;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 1em;
  background-color: #fff;
  font-weight: 600;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.btn:hover {
  background-color: #e0e0e0;
}
</style>