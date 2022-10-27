<template>
  <header>
    <div class="container">
      <router-link to="/">Contact Manager</router-link>
      <font-awesome-icon @click="showMenu()" icon="fa-solid fa-bars" />
      <nav :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
        <ul>
          <li>
            <router-link to="/"> <font-awesome-icon icon="fa-solid fa-house" /> Home </router-link>
          </li>
          <li>
            <router-link to="/add"> <font-awesome-icon icon="fa-solid fa-plus" /> Add </router-link>
          </li>
          <li>
            <router-link to="/about">
              <font-awesome-icon icon="fa-regular fa-circle-question" /> About
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style scoped>
header {
  background-color: #343a40;
  color: #ffffff;
  padding: 10px 30px;
}

header div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
}

a {
  color: inherit;
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .open-menu {
    width: initial;
  }
}

@media screen and (max-width: 768px) {
  .closed-menu {
    display: none;
  }
}

.open-menu {
  display: block;
  width: 100%;
}

@media screen and (min-width: 768px) {
  .fa-bars {
    display: none;
  }
}

ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

@media screen and (max-width: 768px) {
  ul {
    flex-direction: column;
  }
}
</style>
