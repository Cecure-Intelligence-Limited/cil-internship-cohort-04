<template>
  <div class="homeWrapper">
    <div class="infoContainer">
      <h4>Contact Manager</h4>
      <p class="info">This is a portfolio project to showcase knowledge of:</p>

      <ol class="infoList">
        <li>React Components and JSX.</li>
        <li>React Router.</li>
        <li>Component state management.</li>
        <li>Context api for global state management.</li>
        <li>
          Making asynchronous calls to the Json placeholder fake rest api using
          "async/await"
        </li>
      </ol>
    </div>

    <contact-card />
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "HomeView",
  components: {
    ContactCard,
  },
};
</script>

<style lang="scss" scoped>
.homeWrapper {
  padding: 1.5rem;

  .infoContainer {
    background-color: #e0e4ed;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto 35px;
    border-radius: 3px;
    padding: 4rem 1.5rem;

    h4 {
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 0.9rem;
    }

    .info {
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
      font-weight: 300;
    }

    .infoList {
      padding: 0 1.5rem;

      li {
        list-style-type: lower-roman;
        line-height: 1.5;
      }
    }
  }
}
</style>
