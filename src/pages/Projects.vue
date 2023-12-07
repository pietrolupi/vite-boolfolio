<script>
  import axios from 'axios';
  import {store} from  '../data/store';
  import ProjectCard from '../components/ProjectCard.vue';
  import Loader from '../components/Loader.vue';
  import PaginatorNav from '../components/PaginatorNav.vue';


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
        paginator: {
          links: [],  /* links */
          first_page_url: '',
          last_page_url: '',
          current_page: '',
          last_page: '',
        }
      }
    },
    methods: {
      getApi(endpoint){
        this.isLoading = true;
        axios.get(endpoint)
        .then(res=>{
          console.log(res.data);
          store.projects = res.data.data;
          this.paginator.links = res.data.links; /* links */
          console.log(res.data.first_page_url);
          this.isLoading = false;

          //prima ed ultima pagina 
          this.paginator.first_page_url = res.data.first_page_url;
          this.paginator.last_page_url = res.data.last_page_url;
          //dati che passo per capire quando disabilitare i bottoni first & last
          this.paginator.current_page = res.data.current_page;
          this.paginator.last_page = res.data.last_page;
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
  
  <h1>Vite Boolfolio</h1>
  <div class="projects-container">
    <div v-if="isLoading" class="loader-container">
      <Loader  />

    </div>
    <ProjectCard v-else />

    <div class="pag-nav-container" v-if="!isLoading">
      
      <PaginatorNav 
      :paginator = "paginator"
      
      @callApi="getApi"/>   <!-- passo la props (vedi PaginatorNav ) -->  <!-- @callApi è il nome $emit, =funzione che richiamo -->
    </div>
   
  </div>
</template>

<style lang="scss" scoped>

.projects-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  

  .loader-container {
    margin-top: 120px;
  }

  .pag-nav-container {
    width: 600px;
    margin: 0 300px;
    
  }
  
}

h1{
      text-align: center;
      padding-top: 50px;
      color: white;
      font-weight: 900;
      font-size: 3.5rem;
    }
  
   
 


</style>
