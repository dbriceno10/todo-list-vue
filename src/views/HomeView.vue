<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
     <TodoList/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src]
import TodoList from '@/components/todo.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
    TodoList
  },
});
</script>
