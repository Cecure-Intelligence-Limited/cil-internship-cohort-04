// import axios from "axios";
import { createStore } from "vuex";
// import Vue from "vue";
// import Vuex from "vuex";
// import contacts from "./modules/contacts";

// Load Vuex
// Vue.use(Vuex);

// create store
// export default new Vuex.Store({
//   modules: {
//     contacts,
//   },
// });

const store = createStore({
  state: {
    contacts: [],
  },

  getters: {},

  mutations: {
    displayContacts(state, contacts) {
      let contactIDs = [];
      contacts.map((contact) => contactIDs.push(contact.id));

      console.log(contactIDs);
      // setLastId(contactIDs[contactIDs.length - 1]);
      let nextId = contactIDs[contactIDs.length - 1] + 1;

      console.log(nextId);
    },

    newContact(state, contact) {
      state.contacts.unshift(contact);

      console.log(state.contacts);
    },
  },
  actions: {
    async fetchContacts({ commit }) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());

      commit("displayContacts", response);
    },

    async addContact({ commit }, id, name, email, phone) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            name: name,
            email: email,
            phone: phone,
          }),
        }
      ).then((res) => res.json());

      commit("newContact", response);
    },
  },
  modules: {},
});

export default store;
