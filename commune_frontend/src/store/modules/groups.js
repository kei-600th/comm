import axios from "axios";

const apiUrl = "http://localhost:3000";

const state = {
  groups: [],
  group: null,
  isEditMode: false,
};

const getters = {
  groups: (state) => state.groups,
  group: (state) => state.group,
  isEditMode: state => state.isEditMode,
};

const mutations = {
  setGroups: (state, groups) => (state.groups = groups),
  setGroup: (state, group) => (state.group = group),
  setEditMode: (state, bool) => (state.isEditMode = bool),
};

const actions = {
  async fetchGroups({ commit }) {
    const response = await axios.get(`${apiUrl}/groups`);
    commit("setGroups", response.data); // mutationを呼び出す
  },
  setGroup({ commit }, group) {
    commit('setGroup', group);
  },
  setEditMode({ commit }, bool) {
    commit('setEditMode', bool)
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
