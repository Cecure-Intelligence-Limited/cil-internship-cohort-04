<template>
  <loading-spinner v-if="loading" />
  <div v-else v-for="contact of contacts" :key="contact.id">
    <ContactItem :contact="contact" @delete-contact="deleteContact" />
  </div>
  <!-- <pre>{{ contacts }}</pre> -->
</template>

<script>
import ContactItem from "./ContactItem.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
export default {
  components: { ContactItem, LoadingSpinner },
  name: "ContactList",
  //   props: {
  //     contacts: Array,
  //   },
  data: function () {
    return {
      loading: false,
      contacts: [],
      errorMessage: null,
    };
  },

  methods: {
    deleteContact(id) {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
    },
  },
  created: async function () {
    try {
      this.loading = true;
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
      this.contacts = response;
      this.loading = false;

      let contactIDs = [];
      this.contacts.map((contact) => contactIDs.push(contact.id));

      //   console.log(contactIDs);
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>
