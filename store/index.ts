import Vuex from 'vuex';
import * as root from './root';
import * as todos from './modules/todos';

export type RootState = root.State;

const createStore = () => {
  return new Vuex.Store({
    state: root.state(),
    modules: {
      [todos.name]: todos
    }
  })
}

export default createStore;
