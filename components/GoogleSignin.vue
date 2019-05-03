<template>
  <a class="google-signin" @click="signInWithGoogleRedirect"></a>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import firebase, { googleProvider } from "~/plugins/firebase"

@Component
export default class GoogleSignin extends Vue {
  public signInWithGoogleRedirect () {
    firebase.auth().signInWithRedirect(googleProvider)
  }
}
</script>

<style scoped>
  a.google-signin {
    display: block;
    cursor: pointer;
    background-image: url(../assets/images/btn_google_signin_dark_normal_web.png);
    width: 191px;
    height: 46px;
    margin: 0 auto;
  }
</style>
