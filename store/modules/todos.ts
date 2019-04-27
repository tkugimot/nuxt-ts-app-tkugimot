import { State } from './todoTypes';
import { RootState } from 'store'
import { GetterTree } from 'vuex';

export const name = 'todos';
export const namespaced = true;

export const state = (): State => ({
  todos: []
});

const getters: GetterTree<State, RootState> = {
  allTodos: state => {
      return state.todos;
  }
}
