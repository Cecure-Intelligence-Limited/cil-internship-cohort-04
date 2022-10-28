<template>
  <NavBar />
  <router-view @add-contact="addContact" />
  <footer-section />
</template>

<script>
import FooterSection from "./components/FooterSection.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar, FooterSection },
  methods: {
    addContact(contact) {
      this.contacts = this.contacts.unshift(contact);
    },
  },
  created: async function () {
    try {
      const response = await await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
      this.contacts = response;

      let contactIDs = [];
      this.contacts.map((contact) => contactIDs.push(contact.id));

      // console.log(contactIDs);
    } catch (error) {
      this.errorMessage = error;
    }
  },
  // data() {
  //   return {
  //     contacts: [],
  //     contactsIDs: [],
  //   };
  // },
};
</script>

<style></style>
