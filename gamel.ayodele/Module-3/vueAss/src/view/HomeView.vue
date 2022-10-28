<template>
  <Home @delete-info="deleteInfo" :infos="infos" />
</template>

<script>
import Home from "../components/Home.vue";

export default {
  name: "HomeView",
  components: {
    Home,
  },
  data() {
    return {
      infos: [],
      // infoEdit: {
      //   info: {},
      //   edit: false,
      // },
    };
  },
  //Edit Info
  methods: {
    //   editInfo(info) {
    //     console.log(info);
    //   },

    //Delete Info
    async deleteInfo(id) {
      const res = await fetch(`api/infos/${id}`, {
        method: "DELETE",
      });

      this.infos = this.infos.filter((info) => info.id !== id);
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
