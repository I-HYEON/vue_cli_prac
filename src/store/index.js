import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos : []
  },
  getters: {
    allTodosCount(state) {
      return state.todos.length
    },
    completedTodosCount(state) {
      const completedTodos = state.todos.filter((todo)=>{
        return todo.completed === true
      })
      return completedTodos.length
    },
    uncompletedTodosCount(state,getter) {
      return getter.allTodosCount - getter.completedTodosCount
    }
  },
  mutations: {

    ADD_TODO(state,newTodoItem) {
      state.todos.push(newTodoItem)
    },
    DELETE_TODO(state) {
      state.todos = []
    },
    DELETE_COMPLETED(state) {
      state.todos = state.todos.filter((todo)=>{
        return todo.completed === false
      })
    }
  },
  actions: {
    AddTodo(context,item) {
      const newTodoItem = {
        title : item,
        completed : false
      }
      context.commit('ADD_TODO',newTodoItem)
    },
    DeleteTodo(context) {
      context.commit('DELETE_TODO')
    },
    DeleteCompleted(context) {
      context.commit('DELETE_COMPLETED')
    }, 
  },
  modules: {
  }
})