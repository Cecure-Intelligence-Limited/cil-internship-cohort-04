<template>
  <header>
    <nav>
      <div class="branding">
        <router-link to="/" class="logo">Contact Manager</router-link>
      </div>

      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" to="/">
            <font-awesome-icon icon="fa-solid fa-house" /> Home
          </router-link>
        </li>
        <li>
          <router-link class="link" to="/add">
            <font-awesome-icon icon="fa-regular fa-clipboard" /> Add
          </router-link>
        </li>
        <li>
          <router-link class="link" to="/about">
            <font-awesome-icon icon="fa-solid fa-circle-question" /> About
          </router-link>
        </li>
      </ul>

      <div class="icon">
        <font-awesome-icon
          icon="fa-solid fa-bars"
          @click="toggleMobileNav"
          v-show="mobile"
          :class="{ 'icon-active': mobileNav }"
        />
      </div>

      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" to="/">
              <font-awesome-icon icon="fa-solid fa-house" /> Home
            </router-link>
          </li>
          <li>
            <router-link class="link" to="/add">
              <font-awesome-icon icon="fa-regular fa-clipboard" /> Add
            </router-link>
          </li>
          <li>
            <router-link class="link" to="/about">
              <font-awesome-icon icon="fa-solid fa-circle-question" /> About
            </router-link>
          </li>
        </ul>
      </transition>
      <!--  -->
    </nav>
    <!--  -->
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  background: #353535;
  z-index: 99;
  width: 100%;
  // position: fixed;
  transition: 0.5s ease all;
  color: #fff;

  nav {
    position: relative;
    display: flex;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    .logo {
      font-weight: 700;
      font-size: 22px;
      color: #ffffff;
    }

    ul,
    .link {
      font-weight: 500;
      color: #b3b3b3;
    }

    li {
      display: flex;
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      svg {
        margin-right: 3px;
      }

      &:hover {
        color: #e6e6e6;
        border-color: #e6e6e6;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      .logo {
        transition: 0.5s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      svg {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #353535;
      top: 60px;
      left: 0;

      li {
        margin-left: 0;
        .link {
          color: #fff;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0px);
    }
  }
}
</style>
