<template>
  <div>
      <p>{{ todo.content }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Todo extends Vue {
  @Prop() todo
}
</script>
