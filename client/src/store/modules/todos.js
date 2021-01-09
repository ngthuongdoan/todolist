import axios from "axios";

export const state = () => ({
  todos: [],
});

export const getters = {
  getTodo(state) {
    return state.todos;
  },
};
export const mutations = {
  SET_TODO(state, todos) {
    state.todos = todos;
  },
};

export const actions = {
  async fetchTodo({ commit }) {
    let value = [];
    const uid = this.getters["userModule/getUser"].data.id;
    const response = await axios.get(`/todo/uid/${uid}`);
    value = [...response.data];
    commit("SET_TODO", value);
  },
  async addTodo({ dispatch }, todo) {
    await axios.post("/todo", todo);
    await dispatch("fetchTodo");
  },
  async updateTodo({ dispatch }, todo) {
    await axios.put(`/todo/${todo.id}`, todo);
    await dispatch("fetchTodo");
  },
  async deleteTodo({ dispatch }, todo) {
    await axios.delete(`/todo/${todo.id}`);
    await dispatch("fetchTodo");
  },
  async complete({ dispatch }, todo) {
    await axios.put(`/todo/complete/${todo.id}`);
    await dispatch("fetchTodo");
  },
};

export const namespaced = true;
