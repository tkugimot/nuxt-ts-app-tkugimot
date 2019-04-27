<template>
  <div>
      <p>{{ todo.content }}</p>
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
}
</script>
