import { State } from './todoTypes';
import { RootState } from 'store'
import { GetterTree, ActionTree, ActionContext, MutationTree } from 'vuex';
import { TodoClass } from './todoTypes';


export const name = 'todos';
export const namespaced = true;

export const state = (): State => ({
  todos: []
});

export const getters: GetterTree<State, RootState> = {
  allTodos: state => {
      return state.todos;
  }
}

export const types = {
  ADDTODO: 'ADDTODO'
}

export interface Actions<S, R> extends ActionTree<S, R> {
  addTodo (context: ActionContext<S, R>, document): void
}

export const actions: Actions<State, RootState> = {
  addTodo ({ commit }, document) {
    const target: HTMLInputElement = <HTMLInputElement>document.target;
    console.log(target.value);
    commit(types.ADDTODO, target.value)
    target.value = '';
  }
}

export const mutations: MutationTree<State> = {
  [types.ADDTODO] (state, content: string) {
    let id = 0
    if (state.todos.length > 0) {
      id = state.todos[state.todos.length - 1].id + 1;
    }
    state.todos.push(new TodoClass(id, content, false));
  }
}
