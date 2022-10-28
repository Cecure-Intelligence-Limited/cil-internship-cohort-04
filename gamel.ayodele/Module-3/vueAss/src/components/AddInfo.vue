<template>
  <form class="container" @submit="onSubmit">
    <div class="card text-dark bg-light">
      <div class="card-header">Add Contact</div>
      <div class="card-body">
        <div class="mb-2">
          <label class="form-label">Name</label>
          <input
            type="text"
            v-model="name"
            placeholder="Add Name"
            class="form-control form-control-lg"
          />
        </div>
        <div class="mb-2">
          <label class="form-label">Email</label>
          <input
            type="email"
            v-model="email"
            placeholder="Add Email"
            class="form-control form-control-lg"
          />
        </div>
        <div class="mb-2">
          <label class="form-label">Phone</label>
          <input
            type="tel"
            v-model="phone"
            placeholder="Add Phone"
            class="form-control form-control-lg"
          />
        </div>

        <div class="mb-2">
          <input type="submit" class="form-control" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddInfo",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.name) {
        alert("please add Contact");
        return;
      }
      const newInfo = {
        name: this.name,
        email: this.email,
        phone: this.phone,
      };
      this.$emit("add-info", newInfo);
      this.name = "";
      this.email = "";
      this.phone = "";
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
input[type="submit"] {
  background-color: rgba(59, 58, 58, 0.986);
  color: white;
}
</style>
