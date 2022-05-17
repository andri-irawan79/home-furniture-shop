<template>
  <v-app>
    <nav-bar-view/>
    <v-main>
      <router-view/>
    </v-main>
    <footer-view></footer-view>
  </v-app>
</template>

<script>
import FooterView from './components/FooterView.vue';
import NavBarView from './components/NavBarView.vue';

export default {
  name: 'App',
  components: {
    NavBarView,
    FooterView
  }
  
};


</script>
