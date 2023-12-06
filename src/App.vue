<script>
  import axios from 'axios';
  import {store} from  './data/store';
  import ProjectCard from './components/ProjectCard.vue';


  export default {
    name: 'App',

    components: {
      ProjectCard,
    },

    data() {
      return {
        store,
      }
    },
    methods: {
      getApi(){
        axios.get(store.apiUrl + 'projects')
        .then(res=>{
          console.log(res.data);
          store.projects = res.data;
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
    <ProjectCard />
   
  </main>
</template>

<style lang="scss">

</style>
