<template>
  <div v-for="contact in contacts" :key="contact.id">
    <ContactCard
      @delete-contact="$emit('delete-contact', contact.id)"
      :contact="contact"
    />
  </div>
</template>


<script>
import ContactCard from "./ContactCard";
export default {
  name: "Contacts",
  props: {
    contacts: Array,
  },
  components: {
    ContactCard,
  },
  emits: ["delete-contact"],
};
</script>