<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="getUserInfo">click me!</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
    ...mapActions('user', [
      'getUserInfo',
    ]),
  },
};
</script>
