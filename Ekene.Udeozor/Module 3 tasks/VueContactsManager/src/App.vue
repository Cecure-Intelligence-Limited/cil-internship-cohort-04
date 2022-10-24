<template>
  <HeaderComponent @toggle-add-contact="toggleAddContact" title="CONTACT MANAGER"/>

  <div v-show="showAddContacts">
  <AddComponent @add-contact = "addContact" />
  </div>
  <ContactsComponent @delete-contact="deleteContact" :contacts = "contacts" />
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/Header";
import ContactsComponent from "./components/Contacts";
import AddComponent from "./components/Add";
import FooterComponent from "./components/Footer";
export default {
  name: 'App',
  components: {
  HeaderComponent,
  ContactsComponent,
  AddComponent,
  FooterComponent
  },
  data(){
  return {
    contacts: [],
    showAddContacts: false,
  }
  },
  created(){
   this.contacts = [{
     name: "Ekene Udeozor",
     email: "ekeneudeozor@gmail.com",
     phone: "08163xxxxx",
     id: "1"
   },
   {
     name: "Leanne Graham",
     email: "Sincere@april.biz",
     phone: "1-770-736-8031 x56442",
     id: "2"
   },
   {
     name: "Ervin Howell",
     email: "Shanna@melissa.tv",
     phone: "010-692-6593 x09125",
     id: "3"
   },
   {
     name: "Clementine Bauch",
     email: "Nathan@yesenia.net",
     phone: "1-463-123-4447",
     id: "4"
   },
   {
     name: "Patricia Lebsack",
     email: "Julianne.OConner@kory.org",
     phone: "493-170-9623 x156",
     id: "5"
   }
   ]
  },
  methods:{
  addContact(newContact){
    this.contacts=[...this.contacts, newContact]
  }
  ,
  deleteContact(id){
  this.contacts = this.contacts.filter((contact) => contact.id !== id);
   console.log("contact", id);
  },
  toggleAddContact(){
   this.showAddContacts = !this.showAddContacts;
  }
  },
  emits: ["delete-contact"]
}
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "lato", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: #454545;
  line-height: 1.7;
  box-sizing: border-box;
}

</style>
