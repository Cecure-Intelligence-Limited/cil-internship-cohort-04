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
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control form-control-lg mt-1"
              type="text"
              placeholder="Enter your name..."
              required
              value="{{name}}"
              name="name"
            />
            <div className="invalid-feedback">Name is required..</div>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email">Email</label>
            <input
              className="form-control form-control-lg mt-1"
              type="email"
              placeholder="Enter your email..."
              required
              value="{{email}}"
              name="email"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="phone">Phone</label>
            <input
              className="form-control form-control-lg mt-1"
              type="text"
              placeholder="Enter your phone..."
              required
              :value="{ phone }"
              name="phone"
            />
          </div>
          <input
            type="submit"
            value="Update"
            className="btn btn-block btn-dark w-100 mt-3"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditContactView",
  data: function () {
    return {
      id: localStorage.getItem("Id"),
      name: localStorage.getItem("Name"),
      email: localStorage.getItem("Email"),
      phone: localStorage.getItem("Phone"),
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>
