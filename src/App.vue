<script>
  import axios from 'axios';
  import {store} from  './data/store';
  import ProjectCard from './components/ProjectCard.vue';
  import Loader from './components/Loader.vue';


  export default {
    name: 'App',
    

    components: {
      ProjectCard,
      Loader,
    },

    data() {
      return {
        store,
        isLoading: true,
      }
    },
    methods: {
      getApi(){
        axios.get(store.apiUrl + 'projects')
        .then(res=>{
          console.log(res.data);
          store.projects = res.data.data;
          this.isLoading = false;
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
    <div v-if="isLoading" class="loader-container">
      <Loader  />

    </div>
    <ProjectCard v-else />
   
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
</style>
