<template>
  <Todos />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from '~/components/TodoList.vue';
import * as todos from '~/store/modules/todos';

@Component({
  components: {
    TodoList
  }
})
export default class Home extends Vue {

}
</script>
