<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
    // We only fetch the item itself before entering the view, because
  // it might take a long time to load threads with hundreds of comments
  // due to how the HN Firebase API works.
  // asyncData ({ store, route: { params: { id }}}) {
  //   return store.dispatch('FETCH_ITEMS', { ids: [id] })
  // },
};
</script>
