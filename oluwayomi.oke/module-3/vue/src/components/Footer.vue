<template>
  <footer>
    <p class="copy">
      <font-awesome-icon icon="fa-regular fa-copyright" /> 2022.
    </p>
    <p>'Yomi Oke</p>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style lang="scss" scoped>
footer {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #353535;
  color: #e6e6e6;
  padding: 15px;

  .copy {
    margin-right: 15px;
  }
}
</style>
