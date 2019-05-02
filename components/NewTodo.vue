<template>
    <div>
        <h2>Todo Input</h2>
        <input type="text" @keyup.enter="addTodo"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import * as todos from '~/store/modules/todos'
import { namespace } from 'vuex-class'
const Todos = namespace(todos.name)

@Component
export default class NewTodo extends Vue {
  @Todos.Action addTodo
}
</script>
