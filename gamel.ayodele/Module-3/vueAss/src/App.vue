<template>
  <Navbar />

  <router-view @add-info="addInfo" />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";

import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,

    Footer,
  },
  data() {
    return {
      infos: [],
    };
  },

  methods: {
    //Add Info
    async addInfo(info) {
      const res = await fetch("api/infos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(info),
      });
      const data = await res.json();

      this.infos = [...this.infos, info];
    },
    async FetchInfos() {
      const res = await fetch("api/infos");
      const data = await res.json();
      return data;
    },
    async FetchInfo(id) {
      const res = await fetch(`api/infos/${id}`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.infos = await this.FetchInfos();
  },
};
</script>

<style></style>
