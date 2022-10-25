<template>
  <div :key="contact.id" v-for="contact in allContacts">
    <Contact :contact="contact" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Contact from '@/components/Contact.vue';

export default {
  name: 'Contacts',
  components: {
    Contact,
  },
  methods: {
    ...mapActions(['fetchContacts']),
  },
  computed: mapGetters(['allContacts']),
  created() {
    this.fetchContacts();
  },
};
</script>
