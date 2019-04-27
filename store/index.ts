import Vuex from 'vuex'
import * as root from './root'

export type RootState = root.State

const createStore = () => {
  return new Vuex.Store({
    state: root.state(),
    modules: {
    }
  })
}

export default createStore
