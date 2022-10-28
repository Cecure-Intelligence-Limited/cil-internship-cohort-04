<template>
  <form @submit="onSubmit">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" placeholder="Add Name" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="email" placeholder="Add Email" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="phone" placeholder="Add Phone" />
    </div>
    <input type="submit" />
  </form>
</template>

<script>
export default {
  name: "UpdateInfo",
  data() {
    return {
      name: "info.name",
      email: "info.email",
      phone: "info.phone",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.name) {
        alert("please add Contact");
        return;
      }
      const infoEdit = {
        name: this.name,
        email: this.email,
        phone: this.phone,
      };
      this.$emit("update-info", infoEdit);
      this.name = "";
      this.email = "";
      this.phone = "";
    },
  },
};
</script>
