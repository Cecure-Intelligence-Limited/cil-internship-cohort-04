<template>
  <nav class="mb-3 py-1 navbar navbar-expand-sm navbar-dark bg-dark">
    <div
      class="d-flex justify-content-between ms-auto me-auto w-100 container"
      :style="{ maxWidth: '1100px' }"
    >
      <div href="#home" class="ms-3 navbar-brand">
        <router-link aria-current="page" class="d-flex nav-link active" to="/"
          >Contact Manager</router-link
        >
      </div>
      <!-- <button
        aria-controls="basic-navbar-nav"
        type="button"
        aria-label="Toggle navigation"
        class="navbar-toggler collapsed"
        :style="{ marginLeft: '30vw', marginRight: auto }"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="navbar-collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container">
        <div
          class="collapse navbar-collapse"
          id="navbar-collapse"
          :style="{ marginLeft: '30vw', marginRight: auto }"
        >
          <ul class="me-auto navbar-nav">
            <li class="nav-item active">
              <router-link
                aria-current="page"
                class="d-flex nav-link active"
                to="/"
              >
                <i
                  class="fa fa-home"
                  :style="{
                    filter:
                      'invert(56%) sepia(6%) saturate(242%) hue-rotate(163deg) brightness(89%) contrast(90%)',
                    width: '12px',
                    height: '8px',
                    marginTop: '3px',
                    marginRight: '10px',
                  }"
                ></i>
                Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="d-flex nav-link" to="/contact/add"
                ><i
                  class="fa-solid fa-file-circle-plus"
                  :style="{
                    filter:
                      'invert(36%) sepia(6%) saturate(242%) hue-rotate(163deg) brightness(100%) contrast(70%)',
                    width: '12px',
                    height: '8px',
                    marginTop: '3px',
                    marginRight: '10px',
                  }"
                ></i
                >Add</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="d-flex nav-link" to="/about"
                ><i
                  class="fa-regular fa-circle-question"
                  :style="{
                    filter:
                      'invert(36%) sepia(6%) saturate(242%) hue-rotate(163deg) brightness(100%) contrast(70%)',
                    width: '12px',
                    height: '8px',
                    marginTop: '3px',
                    marginRight: '10px',
                  }"
                ></i
                >About</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
