<script>
  import {store} from '../data/store';


  export default {

    name:'ProjectCard',
    
    data(){
      return{
        title:'Pagina Component Projects',
        store,
      }
    },
  
  }
</script>

<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="project in store.projects" :key="project.id">
        {{ project.title }}
      </li>
    </ul>
  </div>

</template>

<style lang="scss" scoped>

</style>