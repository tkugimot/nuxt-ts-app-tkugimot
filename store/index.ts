import Vuex from 'vuex';
import * as root from './root';
import * as todos from './modules/todos';
import * as users from './modules/users';

export type RootState = root.State;

const createStore = () => {
  return new Vuex.Store({
    state: root.state(),
    modules: {
      [todos.name]: todos,
      [users.name]: users,
    }
  })
}

export default createStore;
