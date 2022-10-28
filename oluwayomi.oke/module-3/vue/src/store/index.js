import { createStore } from "vuex";

import getContacts from "@/api/getContacts";
import getSingleContact from "@/api/getSingleContact";
import deleteContact from "@/api/deleteContact";

export const SET_ACTIVE = "SET_ACTIVE";

export const RECEIVE_CONTACTS = "RECEIVE_CONTACTS";
export const FETCH_CONTACTS = "FETCH_CONTACTS";

export const DELETE_TODO = "DELETE_TODO";
export const REMOVE_CONTACT = "REMOVE_CONTACT";

export const RECEIVE_ONE_CONTACT = "RECEIVE_ONE_CONTACT";
export const FETCH_ONE_CONTACT = "FETCH_ONE_CONTACT";

export const state = () => {
  return {
    contacts: [],
    contact: {},
  };
};

export const mutations = {
  [RECEIVE_CONTACTS](state, contacts) {
    state.contacts = contacts;
  },
  [DELETE_TODO](state, id) {
    state.contacts = state.contacts.filter((contact) => contact.id != id);
  },
  [RECEIVE_ONE_CONTACT](state, contact) {
    state.contact = contact;
  },
};

export const actions = {
  [FETCH_CONTACTS]: async (context) => {
    const contactLists = await getContacts();
    context.commit(RECEIVE_CONTACTS, contactLists);
  },
  [FETCH_ONE_CONTACT]: async (context, id) => {
    const contactList = await getSingleContact(id);
    context.commit(RECEIVE_ONE_CONTACT, contactList);
  },
  [REMOVE_CONTACT]: async (context, id) => {
    const deleteCon = await deleteContact(id);
    context.commit(DELETE_TODO, deleteCon);
  },
};

const store = createStore({
  state,
  mutations,
  actions,
});

export default store;
