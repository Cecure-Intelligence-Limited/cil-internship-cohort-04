<template>
  <div class="wrapper">
    <h2>Contact Manager</h2>
    <p>This is a portfolio project to showcase knowledge of:</p>
    <ol>
      <li>VueJS Components</li>
      <li>Vue Routing</li>
      <li>Vue data management, props and states</li>
      <li>Vue global state management</li>
      <li>Making asynchronous calls to the JSON placeholder fake RESR API using 'async/await'</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'ProjectDescription',
};
</script>

<style scoped>
.wrapper {
  background: #e9ecef;
  padding: 20px 30px;
  margin-bottom: 30px;
}

h2 {
  font-weight: 400;
  text-align: center;
}

ol {
  list-style: lower-roman;
}
</style>
