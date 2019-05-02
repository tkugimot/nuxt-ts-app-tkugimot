<template>
  <div>
    <NewTodo />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from '~/components/TodoList.vue';
import NewTodo from '~/components/NewTodo.vue';
import * as todos from '~/store/modules/todos';

@Component({
  components: {
    TodoList,
    NewTodo
  }
})
export default class Home extends Vue {
}
</script>
