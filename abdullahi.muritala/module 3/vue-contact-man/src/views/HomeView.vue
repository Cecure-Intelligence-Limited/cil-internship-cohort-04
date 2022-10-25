<template>
  <div class="container">
    <div class="wrapper">
      <ProjectDescription />
      <Contacts />
    </div>
  </div>
</template>

<script>
import ProjectDescription from '@/components/ProjectDescription.vue';
import Contacts from '@/components/Contacts';

export default {
  name: 'HomeView',
  components: {
    ProjectDescription,
    Contacts,
  },
};
</script>

<style scoped>
.wrapper {
  padding: 20px 30px;
}
</style>
