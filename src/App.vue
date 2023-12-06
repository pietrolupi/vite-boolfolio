<script>
  import axios from 'axios';
  import {store} from  './data/store';
  import ProjectCard from './components/ProjectCard.vue';
  import Loader from './components/Loader.vue';
  import PaginatorNav from './components/PaginatorNav.vue';


  export default {
    name: 'App',
    

    components: {
      ProjectCard,
      Loader,
      PaginatorNav,
    },

    data() {
      return {
        store,
        isLoading: true,
        links: [],  /* links */
      }
    },
    methods: {
      getApi(endpoint){
        this.isLoading = true;
        axios.get(endpoint)
        .then(res=>{
          console.log(res.data);
          store.projects = res.data.data;
          this.links = res.data.links; /* links */
          this.isLoading = false;
        })
      },

     /*  callApi(linkUrl){
        console.log(linkUrl);
      }  sposto tutta la funzionalità direttamente in getApi, usando un parametro "endpoint" che userò sia per fare la chiamata iniziale dandogli direttamente l'url in mounted(){}  */ 
    },
    mounted() {
      this.getApi(store.apiUrl + 'projects');
    }
  }
</script>

<template>
  <header>
    <h1>Vite Boolfolio</h1>
    
   
  </header>

  <main>
    <div v-if="isLoading" class="loader-container">
      <Loader  />

    </div>
    <ProjectCard v-else />

    <div class="pag-nav-container" v-if="!isLoading">
      
      <PaginatorNav 
      :links = "links"
      @callApi="getApi"/>   <!-- passo la props (vedi PaginatorNav ) -->  <!-- @callApi è il nome $emit, =funzione che richiamo -->
    </div>
   
  </main>
</template>

<style lang="scss">
  header{
    h1{
      margin-top: 50px;
      color: white;
      font-weight: 900;
    }
  }
  .loader-container {
    margin-top: 120px;
  }

  .pag-nav-container {
    width: 600px;
    margin: 0 300px;
    
  }
</style>
