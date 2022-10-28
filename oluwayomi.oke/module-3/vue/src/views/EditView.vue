<template>
  <form autoComplete="off" class="formContainer" @submit.prevent="update">
    <p class="formHeading">Edit Contact</p>

    <div class="formText">
      <label htmlFor="fullname">Name</label>
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Enter your name..."
        required
        v-model="fullname"
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email..."
        required
        v-model="email"
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Enter your phone..."
        required
        v-model="phone"
      />

      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
// import axios from "axios";
import { useRoute } from "vue-router";

const URL = "http://localhost:3000/contacts";

export default {
  data() {
    return {
      fullname: "",
      email: "",
      phone: "",
    };
  },
  async mounted() {
    const route = useRoute();
    const id = route.params.id;
    await this.$store.dispatch("FETCH_ONE_CONTACT", id);
    // console.log(this.$store.state.contact);
    const res = this.$store.state.contact;

    this.fullname = res.fullname;
    this.email = res.email;
    this.phone = res.phone;
  },
  computed: {},
  methods: {
    async update() {
      const resquest = {
        fullname: this.fullname,
        email: this.email,
        phone: this.phone,
      };

      await axios.put(`${URL}/${this.$route.params.id}`, resquest);

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
