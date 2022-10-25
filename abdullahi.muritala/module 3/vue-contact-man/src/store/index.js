import { createStore } from 'vuex';
import contacts from '@/store/modules/contacts';

export default createStore({
  modules: {
    contacts,
  },
});
