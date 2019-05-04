<template>
  <div>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Nuxt TS App - tkugimot
                </h1>
                <p class="subtitle">
                    Welcome to Very Easy Todo List, 
                </p>
                <p class="subtitle" v-if="user !== null">{{ user.displayName }}</p>
                <font-awesome-icon icon="coffee" />
                <button v-show="user.isLoggedin" class="button is-info" @click="logout">Logout</button>
            </div>
        </div>
    </section>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from "~/plugins/firebase"
import { namespace } from 'vuex-class';
import * as users from '~/store/modules/users';
import { UserClass } from '../store/modules/userTypes';

const Users = namespace(users.name);

@Component({})
export default class DefaultLayout extends Vue {
    @Users.Getter user

    public logout () {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            firebase.auth().signOut();
            this.$store.dispatch("users/setUser", new UserClass(false, "", ""));
        });
        this.$router.push('/login');
        this.$nuxt.$loading.finish();
    }
}
</script>


<style lang="scss">
    .hero {
        .hero-body {
            .container {
                .subtitle {
                    font-weight: bold;
                    display: inline;
                }
                button {
                    display: block;
                    margin-top: 30px;
                }
            }
        }
    }
</style>
