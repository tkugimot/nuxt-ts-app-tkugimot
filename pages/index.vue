<template>
  <Todos />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Todos from '~/components/Todos.vue';

@Component({
  components: {
    Todos
  }
})
export default class Home extends Vue {}
</script>
