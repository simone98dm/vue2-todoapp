<template>
  <span :class="`badge ${this.variant}`">{{ this.text }}</span>
</template>

<script>
export default {
  name: "BadgeComponent",
  props: {
    text: {
      type: String,
    },
    variant: {
      type: String,
    },
  },
};
</script>

<style scoped>
.badge {
  border-radius: 25px;
  padding: 4px 10px;
  font-weight: 300;
  margin: 15px 5px;
}
.green {
  background-color: green;
  color: white;
}
.red {
  background-color: red;
  color: white;
}
.blue {
  background-color: lightskyblue;
  color: white;
}
</style>