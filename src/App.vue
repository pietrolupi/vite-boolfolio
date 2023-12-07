<script>
  import axios from 'axios';
  import {store} from  './data/store';
  import ProjectCard from './components/ProjectCard.vue';
  import Loader from './components/Loader.vue';
  import PaginatorNav from './components/PaginatorNav.vue';
  import Header from './components/Header.vue';


  export default {
    name: 'App',
    

    components: {
      Header,
    },

    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {

      
    }
  }
</script>

<template>
  <Header />
  <div class="main-wrapper">

    <RouterView />
   
  </div>
</template>

<style lang="scss">
  .main-wrapper {
    
    height:calc(100vh - 90px);
    width: 100%;
    background-color: burlywood;
    color: white;
    text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
   
  }
</style>
