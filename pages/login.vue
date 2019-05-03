<template>
  <div>
      <section class="hero">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Login</h3>
                    <div class="box">
                        <GoogleSignin />
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from '~/components/TodoList.vue';
import GoogleSignin from '~/components/GoogleSignin.vue';
import * as todos from '~/store/modules/todos';

@Component({
  components: {
    GoogleSignin
  }
})
export default class Home extends Vue {
}
</script>
