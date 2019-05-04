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
import firebase from "~/plugins/firebase"
import { UserClass } from '../store/modules/userTypes';

@Component({
  components: {
    GoogleSignin
  }
})
export default class Login extends Vue {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          await this.$store.dispatch("users/setUser", new UserClass(true, user.displayName, user.email));
          this.$nuxt.$loading.finish()
          this.$router.push("/");
        } else {
          this.$nuxt.$loading.finish()
        }
      });
    });
  }
}
</script>
