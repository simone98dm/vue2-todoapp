<template>
  <div class="container">
    <Form v-on:create="onCreateHandler"></Form>
    <h1>List</h1>
    <List
      :items="list"
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
  beforeMount() {
    this.list = this.list.map((todoItem, i) => {
      todoItem.id = i;
      todoItem.isCompleted = false;
      todoItem.createDate = new Date().getTime();
      todoItem.modifiedDate = new Date().getTime();
      return todoItem;
    });
  },
  data() {
    return {
      list: [
        {
          message:
            "Pariatur labore fugiat quis ad ea Lorem id veniam in nulla cillum mollit culpa deserunt.",
          id: null,
          isCompleted: false,
          createDate: null,
          modifiedDate: null,
        },
        {
          message: "In non dolore enim tempor elit.",
          id: null,
          isCompleted: false,
          createDate: null,
          modifiedDate: null,
        },
        {
          message: "Laboris voluptate voluptate dolor consectetur ea ipsum.",
          id: null,
          isCompleted: false,
          createDate: null,
          modifiedDate: null,
        },
      ],
    };
  },
  methods: {
    onCompleteClickHandler(item) {
      let newList = this.list.map((todoItem) => {
        if (todoItem.id === item.id) {
          todoItem.isCompleted = !todoItem.isCompleted;
        }
        return todoItem;
      });

      this.list = [...newList];
    },
    onDeleteClickHandler(item) {
      this.list = this.list.filter((todoItem) => todoItem.id != item.id);
    },
    onSaveHandler(updatedItem) {
      let newList = this.list.map((todoItem) => {
        if (todoItem.id === updatedItem.id) {
          todoItem = updatedItem;
        }
        return todoItem;
      });

      this.list = [...newList];
    },
    onCreateHandler(message) {
      const newTodo = {
        i: this.list.length,
        isCompleted: false,
        createDate: new Date().getTime(),
        modifiedDate: new Date().getTime(),
        message: message
      }
      this.list.push(newTodo);
    }
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