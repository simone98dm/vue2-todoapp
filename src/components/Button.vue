<template>
  <button
    v-bind:class="`
    bg-${variant}-600 
    text-white 
    px-4 
    py-2 
    m-2
    rounded-md 
    text-1xl 
    font-medium 
    hover:bg-${variant}-800 
    transition 
    duration-300`"
    v-on:click="this.clickEvent"
  >
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
