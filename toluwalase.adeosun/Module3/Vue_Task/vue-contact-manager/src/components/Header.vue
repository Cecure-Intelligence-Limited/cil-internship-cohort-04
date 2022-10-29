<template>
  <div className="header  text-white w-full bg-[#343a40] h-fit ">
    <header className="max-w-[1140px]  m-auto flex justify-between p-2">
      <div className="p-2">
        <h1>Contact Manager</h1>
      </div>
      <Nav />
    </header>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  name: "Header",
  components: {
    Nav,
  },
};
</script>

<style>
</style>
