<template>

<div :key = "contact.id" v-for="contact in contacts">
<div class="contacts-box">
<span class="contact-name">{{contact.name}}</span>
<i @click="deleteContact(contact.id)" class="fa-solid fa-x trash-icon"></i>
<div>
<p><span class="contacts-email">Email: </span><span> {{contact.email}}</span></p>
<p><span class="contacts-email">Phone: </span><span> {{contact.phone}}</span></p>
</div>

</div>
</div>
</template>

<script>
export default{
name: "Contacts-component",
props: {
contacts: Array
},
methods: {
deleteContact(id){
this.$emit("delete-contact", id);
}
}
}
</script>

<style>
.contacts-box{
  border: 1px solid #1264de;
  background-image: linear-gradient(to right bottom, #cae0e8, #96c2e3);
  border-radius: 3px;
  padding: 2rem;
  margin-bottom: 2rem;
  margin-left: 10rem;
  margin-right: 10rem;
}
.contact-name{
  font-size: 2.5rem;
  font-weight: bold;
  color: #003af5;
}
.contacts-email{
  font-weight: bold;
}
.trash-icon{
  margin-left: 3rem;
  color: rgba(189, 67, 58, .5);
  transition: .3s ease-in;
  cursor: pointer;
}
.trash-icon:hover{
  transform: scale(1.2);
  color: red;
}

</style>
