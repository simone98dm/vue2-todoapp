<template>
  <div class="container">
    <h1>Add new:</h1>
    <Form v-on:create="onCreateHandler"></Form>
    <h1>Todos:</h1>
    <List
      :items="this.$store.getters.todoItems"
      v-on:complete="onCompleteClickHandler"
      v-on:delete="onDeleteClickHandler"
      v-on:textsave="onSaveHandler"
    ></List>
  </div>
</template>

<script>
import List from "./List.vue";
import Form from "./Form.vue";
export default {
  name: "HomeComponent",
  components: {
    List,
    Form,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    onCompleteClickHandler(item) {
      item.isCompleted = !item.isCompleted;
      this.$store.commit("updateTodo", { ...item });
    },
    onDeleteClickHandler(item) {
      this.$store.commit("removeTodo", item);
    },
    onSaveHandler(updatedItem) {
      this.$store.commit("updateTodo", updatedItem);
    },
    onCreateHandler(message) {
      const newTodo = {
        id: this.$store.getters.todoItems.length,
        isCompleted: false,
        createDate: new Date().getTime(),
        modifiedDate: new Date().getTime(),
        message: message,
      };
      this.$store.commit("addTodo", newTodo);
    },
  },
};
</script>

<style scoped>
.container {
  margin: auto;
}

@media only screen and (max-width: 600px) {
  .container {
    max-width: 100%;
    transition: 500ms;
  }
}
@media only screen and (min-width: 768px) {
  .container {
    max-width: 600px;
    transition: 500ms;
  }
}
@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1000px;
    transition: 500ms;
  }
}
</style>