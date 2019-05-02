<template>
    <div class="container">
        <div class="field is-three-fifths">
          <div class="control">
            <input class="input is-rounded" type="text" @keyup.enter="addTodo" placeholder="Write new TODO..." />
          </div>
        </div>
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

<style lang="scss">
  .field {
    margin-top: 20px;
  }
  .input {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
</style>
