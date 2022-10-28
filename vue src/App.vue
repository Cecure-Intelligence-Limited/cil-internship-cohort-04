<template>
  <Nav />
 
  <AddTask  />
  <router-view  @add-task="addTask"></router-view>
  
</template>

<script>
import Nav from './components/Nav.vue';
import AddTask from './views/Add.vue'




export default {
  name: 'App',
  components: {
    Nav,
    
  },
  data() {
    return {
      
    }
  },
  methods: {
    addTask(task) {
      this.tasks = [task, ...this.tasks]
    },
  }
  
}
</script>

<style>

</style>
