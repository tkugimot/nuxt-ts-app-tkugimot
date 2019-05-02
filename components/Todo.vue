<template>
  <div>
      <div v-show="!todo.isEditing">
          <p>Text : {{ todo.content }}</p>
          <button @click="editTodo(todo.id)">Edit</button>
      </div>
      <div v-show="todo.isEditing">
          <input :id="todo.id" type="text" @keyup.enter="updateTodo" :value="todo.content"/>
      </div>

      <button @click="removeTodo(todo.id)">DONE</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import * as todos from '~/store/modules/todos'
import { namespace } from 'vuex-class'

const Todos = namespace(todos.name)

@Component
export default class Todo extends Vue {
  @Prop() todo

  @Todos.Action removeTodo
  @Todos.Action editTodo
  @Todos.Action updateTodo
}
</script>
