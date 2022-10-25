const state = {
  contacts: [],
};

const getters = {
  allContacts: (state) => state.contacts,
};

const actions = {
  async fetchContacts({ commit }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      commit('setContacts', data);
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteContact({ commit }, id) {
    commit('removeContact', id);
  },
};

const mutations = {
  setContacts: (state, contacts) => (state.contacts = contacts),
  removeContact: (state, id) =>
    (state.contacts = state.contacts.filter((contact) => contact.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
