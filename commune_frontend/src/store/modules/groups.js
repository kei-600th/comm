import axios from "axios";

const apiUrl = "http://localhost:3000";

const state = {
  groups: [],
  group: null,
};

const getters = {
  groups: (state) => state.groups,
  group: (state) => state.group,
};

const mutations = {
  setGroups: (state, groups) => (state.groups = groups),
  setGroup: (state, group) => (state.group = group),
};

const actions = {
  async fetchGroups({ commit }) {
    const response = await axios.get(`${apiUrl}/groups`);
    commit("setGroups", response.data); // mutationを呼び出す
  },
  setGroup({ commit }, group) {
    commit('setGroup', group);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
