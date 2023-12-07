

<script>

import axios from 'axios';
import { store } from '../data/store';

export default {
  name: 'PostDetail',
  data(){
    return {
      slug: '',
      store,
      project:{},
    }
  },
  components: {},
  methods: {
    getProject(slug){
      axios.get(store.apiUrl + 'projects/project-detail/' + slug)
      .then(res=>{
        this.project = res.data;
      })
    }
  },
  mounted() {
    this.slug = this.$route.params.slug;  //per prendere i parametri dal componente
    
    this.getProject(this.$route.params.slug);
  },
  computed:{},
}
</script>

<template>
  <div class="detail-container">
    <h1> {{project.title}} </h1>
    <span>{{ project.type.name }}</span>
    <p>{{ project.description }}</p>
    <span><strong>Associated Technologies:</strong></span>
    <br>
    <span><strong>Assciated Type:</strong></span>
    
  </div>
</template>

<style lang="scss" scoped>
    h1{
    text-align: center;
    font-size: 4.5rem;
    padding: 100px 0 30px 0;
  }

  .detail-container{
    text-align: center;
    color: black;
    text-shadow: none;
  }
</style>