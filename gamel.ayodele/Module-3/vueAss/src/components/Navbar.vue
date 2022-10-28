<template>
  <nav class="navbar navbar-expand-sm navbar-dark mb-3">
    <div class="container">
      <div class="container contain">
        <router-link class="navbar-brand" to="/">Contact Manager</router-link>
        <button
          class="navbar-toggler d"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add">Add</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="./about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.contain {
  display: flex;
  justify-content: space-between;
}
nav {
  background-color: rgba(59, 58, 58, 0.986);
}
</style>
