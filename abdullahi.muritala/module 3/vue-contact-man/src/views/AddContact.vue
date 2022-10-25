<template>
  <div class="container">
    <div class="wrapper">
      <h2>Add Contact</h2>
      <form @submit="onSubmit">
        <div class="form-control">
          <label for="contactName">Name</label>
          <input
            type="text"
            v-model="contactName"
            name="contactName"
            id="contactName"
            required
            placeholder="Enter contact's Name"
          />
        </div>
        <div class="form-control">
          <label for="contactEmail">Email</label>
          <input
            type="email"
            v-model="contactEmail"
            name="contactEmail"
            id="contactEmail"
            required
            placeholder="Enter contact's Email"
          />
        </div>
        <div class="form-control">
          <label for="contactPhone">Phone</label>
          <input
            type="text"
            v-model="contactPhone"
            name="contactPhone"
            id="contactPhone"
            required
            placeholder="Enter contact's Phone"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddContact',
  data() {
    return {
      contactName: '',
      contactEmail: '',
      contactPhone: '',
    };
  },
  methods: {
    ...mapActions(['addContact']),
    onSubmit(event) {
      event.preventDefault();
      const id = Math.floor(Math.random() * 100000);
      const newContact = {
        id,
        name: this.contactName,
        email: this.contactEmail,
        phone: this.contactPhone,
      };
      this.addContact(newContact);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-control {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input {
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

input[type='submit'] {
  padding: 10px 20px;
  background: #343a40;
  color: #ffffff;
}

.wrapper {
  padding: 20px 30px;
  max-width: 720px;
}
</style>
