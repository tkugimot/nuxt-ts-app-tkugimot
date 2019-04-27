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
  ADDTODO: 'ADDTODO',
  REMOVETODO: 'REMOVETODO',
}

export interface Actions<S, R> extends ActionTree<S, R> {
  addTodo (context: ActionContext<S, R>, document): void
  removeTodo (context: ActionContext<S, R>, id: number): void
}

export const actions: Actions<State, RootState> = {
  addTodo ({ commit }, document) {
    const target: HTMLInputElement = <HTMLInputElement>document.target;
    console.log(target.value);
    commit(types.ADDTODO, target.value)
    target.value = '';
  },

  removeTodo ({ commit }, id: number) {
    commit(types.REMOVETODO, id)
  }
}

export const mutations: MutationTree<State> = {
  [types.ADDTODO] (state, content: string) {
    let id = 0
    if (state.todos.length > 0) {
      id = state.todos[state.todos.length - 1].id + 1;
    }
    state.todos.push(new TodoClass(id, content, false));
  },

  [types.REMOVETODO] (state, id: number) {
    // 各Todoはidを持っており、そのidを持つTodoのindexを取得する。
    const todoIndex = state.todos.findIndex(todo => todo.id == id);
    state.todos.splice(todoIndex, 1);
  }
}
