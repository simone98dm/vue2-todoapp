<template>
  <div v-if="items && items.length > 0" class="list">
    <Item
      v-for="item in items"
      :item="item"
      :key="item.id"
      v-on:complete="onCompleteClickHandler"
      v-on:delete="onDeleteClickHandler"
      v-on:textsave="onSaveHandler"
    ></Item>
  </div>
  <div v-else>
    <p>No item found!</p>
  </div>
</template>
<script>
import { EVENTS } from "@/common/Constants";
import Item from "./Item.vue";
export default {
  name: "ListComponent",
  props: {
    items: {
      type: Array,
    },
  },
  components: {
    Item,
  },
  methods: {
    onCompleteClickHandler(item) {
      this.$emit(EVENTS.COMPLETE, item);
    },
    onDeleteClickHandler(item) {
      this.$emit(EVENTS.DELETE, item);
    },
    onSaveHandler(updatedItem) {
      this.$emit(EVENTS.TEXTSAVE, updatedItem);
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
}
</style>