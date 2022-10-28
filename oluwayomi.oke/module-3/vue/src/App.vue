<template>
  <header-page />

  <main>
    <router-view />
  </main>

  <footer-page />
</template>

<script>
import HeaderPage from "@/components/Header.vue";
import FooterPage from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderPage,
    FooterPage,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

main {
  min-height: 80vh;
}
</style>
