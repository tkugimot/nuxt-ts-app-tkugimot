<template>
  <div class="card has-background-white-bis">
    <div class="card-content">
      <div class="field">
        <div class="control">
          <input class="input todo is-rounded" v-show="todo.isEditing" :id="todo.id" type="text" @keyup.enter="updateTodo" :value="todo.content" />
          <input disabled class="input todo is-rounded" v-show="!todo.isEditing" :id="todo.id" type="text" @keyup.enter="updateTodo" :value="todo.content" />
          <!-- <p v-show="!todo.isEditing">{{ todo.content }}</p> -->
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <button class="button is-info" v-show="!todo.isEditing" @click="editTodo(todo.id)">Edit</button>
        <button class="button is-info" v-show="todo.isEditing" @click="editTodo(todo.id)" disabled>Edit</button>
      </p>
      <p class="card-footer-item">
        <button class="button is-success" @click="removeTodo(todo.id)">DONE</button>
      </p>
    </footer>
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

<style lang="scss">
  .card {
    margin-top: 25px;
    
    .todo {
      font-size: 18px;
    }
  }
</style>