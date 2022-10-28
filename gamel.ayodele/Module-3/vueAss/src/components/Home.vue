<template>
  <div class="container">
    <div class="main">
      <h2>Contact Manager</h2>
      <p>This is a portfolio project to showcase knowledge of:</p>
      <ol>
        <li>Vue Components</li>
        <li>Vue Router.</li>
        <li>
          Making asynchronous calls to the json placeholder fake rest api using
          "async/await"
        </li>
      </ol>
    </div>
    <div :key="info.id" v-for="info in infos">
      <Info
        @delete-info="$emit('delete-info', info.id)"
        :info="info"
        @edit-info="$emit('edit-info', info)"
      />
    </div>
  </div>
</template>

<script>
import Info from "./Info.vue";
export default {
  name: "Home",
  props: {
    infos: Array,
  },
  components: {
    Info,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  background-color: #eaeaea;
  padding: 60px;
  margin-bottom: 20px;
}

h2 {
  align-self: center;
}
</style>
