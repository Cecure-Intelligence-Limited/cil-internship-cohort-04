<template>
  <div class="container">
    <div class="card card-body mb-4">
      <div class="boxes">
        <div class="first-box">
          <h3>{{ info.name }}</h3>
          <button v-on:click="isHidden = !isHidden">
            <img src="../assets/down-arrow.png" alt="dropdown" class="img" />
          </button>
        </div>
        <div>
          <!-- <router-link to="/update"> -->
          <!-- <button @click="onEdit(info)">
            <img src="../assets/edit.png" alt="EditKey" class="img" />
          </button> -->
          <!-- </router-link> -->
          <button @click="$emit('delete-info', info.id)">
            <img src="../assets/delete1.png" alt="DeleteKey" class="img" />
          </button>
        </div>
      </div>

      <ul class="list-group" v-if="!isHidden">
        <li class="list-group-item">{{ info.email }}</li>
        <li class="list-group-item">{{ info.phone }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    info: Object,
  },
  data() {
    return {
      isHidden: true,
    };
  },
  // methods: {
  //   onEdit(info) {
  //     this.$emit("edit-info", info);
  //   },
  // },

  emit: ["delete-info", "edit-info"],
};
</script>

<style scoped>
.container {
  max-width: 900px;
}
.img {
  width: 25px;
  height: 25px;
}
.first-box {
  display: flex;
  align-items: center;
}
.boxes {
  display: flex;
  justify-content: space-between;
}
button {
  background-color: white;
  border: none;
}
</style>
