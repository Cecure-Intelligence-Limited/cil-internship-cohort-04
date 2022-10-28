<template>
  <div className="container">
    <div
      className="card bg-light mb-3 me-auto ms-auto "
      :style="{ maxWidth: '1140px' }"
    >
      <div className="card-header">
        <b>Add Contact</b>
      </div>
      <div className="card-body">
        <form @submit="onSubmit">
          <div className="form-group mt-2">
            <label htmlFor="name" className="form-label"> Name </label>
            <input
              className="form-control form-control-lg mt-1"
              type="text"
              id="name"
              v-model="name"
              placeholder="Enter your name..."
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email">Email</label>
            <input
              className="form-control form-control-lg mt-1"
              type="email"
              placeholder="Enter your email..."
              required
              name="email"
              v-model="email"
              id="email"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="phone">Phone</label>
            <input
              className="form-control form-control-lg mt-1"
              type="text"
              placeholder="Enter your phone..."
              required
              name="phone"
              v-model="phone"
            />
          </div>
          <input type="submit" className="btn btn-block btn-dark w-100 mt-3" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddContactView",
  data() {
    return {
      id: null,
      name: this.name,
      email: this.email,
      phone: this.phone,
    };
  },
  methods: {
    ...mapActions(["addContact"]),
    onSubmit(e) {
      e.preventDefault();
      this.addContact(this.id, this.name, this.email, this.phone);

      this.$router.push("/");

      console.log(this.name);
    },
  },
};
</script>

<style></style>
