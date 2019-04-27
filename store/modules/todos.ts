import { State } from './todoTypes';
import { RootState } from 'store'
import { GetterTree, ActionTree, ActionContext, MutationTree } from 'vuex';
import { Todo, TodoClass } from './todoTypes';


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
  EDITTODO: 'EDITTODO',
  UPDATETODO: 'UPDATETODO'
}

export interface Actions<S, R> extends ActionTree<S, R> {
  addTodo (context: ActionContext<S, R>, document): void
  removeTodo (context: ActionContext<S, R>, id: number): void
  editTodo (context: ActionContext<S, R>, id: number): void
  updateTodo (context: ActionContext<S, R>, document): void
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
  },

  editTodo ({ commit }, id: number) {
    commit(types.EDITTODO, id)
  },

  updateTodo ({ commit }, document) {
    const target: HTMLInputElement = <HTMLInputElement>document.target;
    const todo: TodoClass = new TodoClass(Number(target.id), target.value, false)
    commit(types.UPDATETODO, todo);
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
  },

  [types.REMOVETODO] (state, id: number) {
    // 各Todoはidを持っており、そのidを持つTodoのindexを取得する。
    const todoIndex = state.todos.findIndex(todo => todo.id == id);
    state.todos.splice(todoIndex, 1);
  },

  [types.EDITTODO] (state, id: number) {
    const todoIndex = state.todos.findIndex(todo => todo.id == id);
    state.todos[todoIndex].isEditing = true;
  },

  [types.UPDATETODO] (state, todo: Todo) {
    const todoIndex = state.todos.findIndex(el => el.id == todo.id);
    // update前の要素を削除
    state.todos.splice(todoIndex, 1);

    // 新しい要素を同じ index に追加
    state.todos.splice(todoIndex, 0, todo);
  }
}
