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


  <div v-for="project in store.projects" :key="project.id" class="project-card">
  <img class="card-img-top" src="..." :alt="project.title">
  <div class="card-body">
    <h1 class="card-title">{{project.title}}</h1>
    <span>{{ project.type.name }}</span>
    <p class="card-text">{{project.description}}</p>
    <span v-if="project.technologies.length !== 0">Asssociated Tech:</span>
    <br>
    <span v-for="technology in project.technologies" :key="technology.id"> <strong>{{ technology.name }}</strong></span>

  </div>
</div>
</template>

<style lang="scss" scoped>
    .project-card{
        width: 400px;
        height: 300px;
        background-color: white;
        border: 1px solid black;
        border-radius: 20px;
        margin: 20px;
        text-align: center;

        img{
            width: 100%;
        }

        h1{
          margin-bottom: 15px;
        }

        p{
          padding: 30px 0;
        }
        span{
          font-weight: 800;
        }
      }
</style>