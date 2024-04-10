
<template>
  <div id="app">
    <Test />
    <!-- Include your SearchFilter component here -->
  </div>
</template>

<script>

<template>
  <router-view/>
</template>

import { ref } from 'vue'; // Import the ref function
// Import the SearchFilter component
import Test from './components/test.vue';

export default {
  name: 'App',
  components: {
    Test, // Register the SearchFilter component
  },
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

