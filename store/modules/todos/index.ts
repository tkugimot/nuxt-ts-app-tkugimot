import { Module } from 'vuex';
import { RootState } from 'store';
import { TodosState } from './types';

export const name = 'todos'

const state: TodosState = {
  todos: []
};

export const todos: Module<TodosState, RootState> = {
  namespaced: true,
  state
};
