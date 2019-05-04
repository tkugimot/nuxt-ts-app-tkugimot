import { RootState } from 'store'
import { GetterTree, ActionTree, ActionContext, MutationTree } from 'vuex';
import { User, UserClass, State } from './userTypes';

export const name = 'users';
export const namespaced = true;

export const state = (): State => ({
  user: new UserClass(false, "", "")
});

export const getters: GetterTree<State, RootState> = {
    user: state => {
        return state.user;
    }
}

export const types = {
    SETUSER: 'SETUSER',
}

export interface Actions<S, R> extends ActionTree<S, R> {
    setUser (context: ActionContext<S, R>, document): void
}

export const actions: Actions<State, RootState> = {
    setUser ({ commit }, user: User) {
        commit(types.SETUSER, user);
    },
}

export const mutations: MutationTree<State> = {
    [types.SETUSER] (state, user: User) {
        state.user = user;
    },
}
