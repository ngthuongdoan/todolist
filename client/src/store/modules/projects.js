import axios from "axios";

export const state = () => ({
  projects: [],
});

export const getters = {
  getProject(state) {
    return state.projects;
  },
};
export const mutations = {
  SET_PROJECT(state, projects) {
    state.projects = [...projects];
  },
  ADD_PROJECT(state, project) {
    state.projects.push(project);
  },
};

export const actions = {
  async fetchProject({ commit }) {
    let value = [];
    const uid = this.getters["userModule/getUser"].data.id;
    const response = await axios.get(`/project/uid/${uid}`);
    value = [...response.data];
    commit("SET_PROJECT", value);
  },
  async addProject({ dispatch }, project) {
    await axios.post("/project", project);
    await dispatch("fetchProject");
  },
  async deleteProject({ dispatch }, name) {
    await axios.delete(`/project/${name}`);
    await dispatch("fetchProject");
    await this.dispatch("todoModule/fetchTodo");
  },
};

export const namespaced = true;
