<template>
  <form autoComplete="off" class="formContainer" @submit.prevent="handleSubmit">
    <p class="formHeading">Add Contact</p>

    <div class="formText">
      <label htmlFor="fullname">Name</label>
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Enter your name..."
        v-model="fullname"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email..."
        v-model="email"
        required
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Enter your phone..."
        v-model="phone"
        required
      />

      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { v4 as uuid } from "uuid";

const URL = "http://localhost:3000/contacts";
const uid = uuid();
const smallid = uid.slice(0, 8);

export default {
  data() {
    return {
      fullname: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    async handleSubmit() {
      const resquest = {
        id: smallid,
        fullname: this.fullname,
        email: this.email,
        phone: this.phone,
      };

      const res = axios.post(URL, resquest);
      const data = res.data;

      this.contact = data;

      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  background-color: #e7e8ea;
  width: 90%;
  max-width: 1200px;
  margin: 15px auto 35px;
  border-radius: 3px;
  border: 1px solid #b9b9b9;
  /* padding: 4rem 1.5rem; */

  .formHeading {
    border-bottom: 1px solid #b9b9b9;
    font-weight: 700;
    padding: 1rem 1.5rem;
    background-color: #dadada;
  }

  .formText {
    padding: 1.5rem;
  }

  .formText button,
  .formText input,
  .formText label {
    display: block;
    width: 100%;
  }

  .formText input {
    margin: 0.7rem 0 1.5rem;
    padding: 1rem;
    border-radius: 3px;
    outline: none;
    border: 1px solid #b9b9b9;
    font-size: 1.1rem;
  }

  .formText button {
    padding: 0.7rem;
    margin-top: 1.5rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid #b9b9b9;
    font-size: 1.1rem;
    background-color: #373737;
    color: #ffffff;
  }
}
</style>
