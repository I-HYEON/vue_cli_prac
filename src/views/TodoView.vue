<template>
  <div>
    <h1>할 일 목록을 작성해봅시다</h1>
    <TodoForm/>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
export default {
  name: 'TodoView',
  components: {
    TodoForm
  }
}
</script>

<style>

</style>