const state = {
  contacts: [],
};

const getters = {
  allContacts: (state) => state.contacts,
  getContactById: (state) => (id) => {
    return state.contacts.find((contact) => contact.id === id);
  },
};

const actions = {
  async fetchContacts({ commit }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    commit('setContacts', data);
  },
  deleteContact({ commit }, id) {
    commit('removeContact', id);
  },
  addContact({ commit }, contact) {
    commit('newContact', contact);
  },
  editContact({ commit }, updContact) {
    commit('updateContact', updContact);
  },
};

const mutations = {
  setContacts: (state, contacts) => (state.contacts = contacts),
  removeContact: (state, id) =>
    (state.contacts = state.contacts.filter((contact) => contact.id !== id)),
  newContact: (state, contact) => state.contacts.unshift(contact),
  updateContact: (state, updContact) =>
    state.contacts.map((contact) => {
      if (contact.id === updContact.id) {
        return updContact;
      } else {
        return contact;
      }
    }),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
