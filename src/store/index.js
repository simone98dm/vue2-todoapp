import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        message:
          "Pariatur labore fugiat quis ad ea Lorem id veniam in nulla cillum mollit culpa deserunt.",
        id: 0,
        isCompleted: false,
        createDate: new Date().getTime(),
        modifiedDate: new Date().getTime(),
      },
      {
        message: "In non dolore enim tempor elit.",
        id: 1,
        isCompleted: false,
        createDate: new Date().getTime(),
        modifiedDate: new Date().getTime(),
      },
      {
        message: "Laboris voluptate voluptate dolor consectetur ea ipsum.",
        id: 2,
        isCompleted: false,
        createDate: new Date().getTime(),
        modifiedDate: new Date().getTime(),
      },
    ]
  },
  getters: {
    todoItems: (state) => state.list
  },
  mutations: {
    addTodo(state, item) {
      state.list.push(item);
    },
    removeTodo(state, item) {
      state.list = state.list.filter((todoItem) => todoItem.id != item.id)
    },
    updateTodo(state, item) {
      const i = state.list.findIndex(x => x.id === item.id);
      if (i > -1) {
        state.list.splice(i, 1, item);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
