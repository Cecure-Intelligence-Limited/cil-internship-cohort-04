<template>
<div :key="contact.id" v-for="contact in contacts">
     <ContactCard :contact="contact"   />

</div>
</template>


<script>
import ContactCard from './ContactCard'
          export default {
    name: 'Contacts',
    props: {
        contacts: Array
    },
    components: {
        ContactCard,
    }
}
</script>