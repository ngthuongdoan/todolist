import router from "@/router";
import axios from "axios";

export const state = () => ({
  user: {
    loggedIn: false,
    data: null,
  },
});

export const getters = {
  getUser(state) {
    return state.user;
  },
};
export const mutations = {
  SET_LOGGED_IN(state, value) {
    state.user.loggedIn = value;
  },
  SET_USER(state, payload) {
    state.user.data = payload;
  },
};

export const actions = {
  logIn({ commit }, user) {
    commit("SET_LOGGED_IN", user !== null);
    if (user) {
      commit("SET_USER", user);
      this.dispatch("projectModule/fetchProject");
      this.dispatch("todoModule/fetchTodo");
    } else {
      commit("SET_USER", null);
    }
  },
  async signup({ commit }, user) {
    await axios.post("/user", user);
  },
  logOut({ commit }) {
    commit("SET_LOGGED_IN", false);
    router.push("/login").then();
  },
};

export const namespaced = true;
