import Vue from 'vue'
import Vuex from 'vuex'
import { makeid } from '../common/Common';
import LocalStorageDataAccess from '../common/LocalStorageDataAccess';

Vue.use(Vuex)

const storage = new LocalStorageDataAccess("todos");

export default new Vuex.Store({
  state: {
    list: [
      {
        message:
          "Pariatur labore fugiat quis ad ea Lorem id veniam in nulla cillum mollit culpa deserunt.",
        id: makeid(10),
        isCompleted: false,
        createDate: new Date().getTime(),
        modifiedDate: new Date().getTime(),
      },
      {
        message: "In non dolore enim tempor elit.",
        id: makeid(10),
        isCompleted: false,
        createDate: new Date().getTime(),
        modifiedDate: new Date().getTime(),
      },
      {
        message: "Laboris voluptate voluptate dolor consectetur ea ipsum.",
        id: makeid(10),
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
      storage.add(item);
    },
    removeTodo(state, item) {
      state.list = state.list.filter((todoItem) => todoItem.id != item.id);
      storage.remove(item);
    },
    updateTodo(state, item) {
      const i = state.list.findIndex(x => x.id === item.id);
      storage.update(state.list[i], item);
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
