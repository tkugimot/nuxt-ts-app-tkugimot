import firebase from "~/plugins/firebase"
import { UserClass } from "~/store/modules/userTypes";

export default ({ nextTick, nuxt, redirect, store, route }) => {
    if (!store.getters['users/user'].isLoggedin && route.name != 'login') {
        redirect("/login");
    }

    if (store.getters['users/user'].isLoggedin && route.name == 'login') {
        redirect("/");
    }
}
