import firebase from "~/plugins/firebase"
import { UserClass } from "~/store/modules/userTypes";

export default ({ app, redirect, store, nuxtState, nextTick }) => {
  app.router.afterEach(async (to, from) => {
    await firebase.auth().onAuthStateChanged(async user => {
        if (user) {
            await store.dispatch("users/setUser", new UserClass(true, user.displayName, user.email))
            if (to.name === "login") {
                return new Promise((resolve) => {
                    redirect("/")
                })
            }
        } else {
            console.log("not loggedin");
            redirect("/login")
        }
    })
  })
}
