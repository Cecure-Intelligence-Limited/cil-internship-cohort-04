<template>
  <hero-section />
  <contact-list />
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import ContactList from "@/components/ContactList.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { HeroSection, ContactList },
  // data: function () {
  //   return {
  //     loading: false,
  //     contacts: [],
  //     errorMessage: null,
  //   };
  // },
  // created: async function () {
  //   try {
  //     this.loading = true;
  //     const response = await await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     ).then((res) => res.json());
  //     this.contacts = response;
  //     this.loading = false;
  //   } catch (error) {
  //     this.errorMessage = error;
  //     this.loading = false;
  //   }
  // },
  methods: {},
};
</script>
