<template>
  <div>
    <input type="text" v-model.trim="newTodoItem" @keyup.enter="AddTodo">
    <input type="submit" value="add" @click="AddTodo">
    <br>
    <br>
    <h3>
      <span>총 할일 {{ allTodosCount }}개</span> | <span>진행상황 {{ completedTodosCount }} / {{ allTodosCount }}</span>
    </h3>
    <br>
    <TodoList/>
    <br>
    <p>총 {{ uncompletedTodosCount }}개의 남은 할 일이 있습니다!</p>
    <button @click = "DeleteCompleted">다 한 일은 이제 보내줘</button>
    <button @click="DeleteTodo">전체 목록을 삭제하자</button>
  </div>
</template>

<script>
import TodoList from './TodoList.vue'

export default {
  name : 'TodoForm',
  data() {
    return {
        newTodoItem : ''
    }
  },
  components:{
    TodoList
  },
  methods : {
    AddTodo() {
        if (this.newTodoItem){
            this.$store.dispatch('AddTodo', this.newTodoItem)
        } else {
            alert('뭔가를 입력을 해야 등록할 수 있겠죠?')
        }
        this.newTodoItem = null
    },
    DeleteTodo() {
      this.$store.dispatch('DeleteTodo')
    },
    DeleteCompleted() {
      this.$store.dispatch('DeleteCompleted')
    }
  },
  computed :{
    allTodosCount() {
      return this.$store.getters.allTodosCount
    },
    completedTodosCount() {
      return this.$store.getters.completedTodosCount
    },
    uncompletedTodosCount() {
      return this.$store.getters.uncompletedTodosCount
    }
  }
}
</script>

<style>

</style>