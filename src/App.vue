<script>
  import axios from 'axios';
  import {store} from  './data/store';
  import ProjectsMain from './components/ProjectsMain.vue';

  

  export default {
    name: 'App',
    data() {
      return {
        store: store
      }
    },
    methods: {
      getApi(){
        axios.get(store.apiUrl + 'projects').then(res=>{
          console.log(res.data);
        })
      }
    },
    mounted() {
      this.getApi();
    }
  }
</script>

<template>
  <header>
    <h1>Vite Boolfolio</h1>
  </header>

  <main>
    <ProjectsMain />
  </main>
</template>

<style lang="scss">

</style>
