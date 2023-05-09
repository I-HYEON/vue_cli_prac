<template>
  <div>
    <li v-for="(item,index) in todoItems" :key="index" style="list-style:none" :class={completed:item.completed}>
        <input type="checkbox" v-model="item.completed">
        {{item.title}}
    </li>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  computed : {
    todoItems() {
        return this.$store.state.todos
    }
  }
}
</script>

<style>
  .completed {
    text-decoration: line-through;
  }
</style>