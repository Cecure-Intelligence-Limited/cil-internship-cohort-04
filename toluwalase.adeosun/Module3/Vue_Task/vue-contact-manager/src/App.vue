<template>
  <Header />
  <Hero />
  <Contacts @delete-contact="deleteTask" :contacts="contacts" />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Footer,
    Contacts,
  },
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    deleteTask(id) {
      if (confirm("Are you sure?")) {
        this.contacts = this.contacts.filter((contact) => contact.id !== id);
      }
    },
  },
  created() {
    this.contacts = [
      {
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        phoneNumber: "1 - 770 - 736 - 8031",
      },
      {
        id: 2,
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        phoneNumber: "010-692-6593 x09125",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        phoneNumber: "1-463-123-4447",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        phoneNumber: "493-170-9623 x156",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        email: "Lucio_Hettinger@annie.ca",
        phoneNumber: "(254)954-1289",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist ",
        email: "Karley_Dach@jasper.info",
        phoneNumber: "(254)954-1289",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        email: "Telly.Hoeger@billy.biz",
        phoneNumber: "210.067.6132",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        email: "Sherwood@rosamond.me",
        phoneNumber: "586.493.6943 x140",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        email: "Chaim_McDermott@dana.io",
        phoneNumber: "(775)976-6794 x41206",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        email: "Rey.Padberg@karina.biz",
        phoneNumber: "024-648-3804",
      },
      {
        name: "Adeosun Toluwalase A.",
        phoneNumber: "08023465668",
        email: "eyiowuawitat@gmail.com",
        id: 11,
      },
    ];
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
