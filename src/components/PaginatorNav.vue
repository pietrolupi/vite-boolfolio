

<script>
export default {
  name: 'PaginatorNav',

  props:{
    links: Array,    /* props di links (vedi App.vue) */
  },

  methods: {
    callApi(linkUrl){
      this.$emit('callApi', linkUrl);   /* emit dell' evento 'callApi'. La parte callApi è la funzione, il secondo parametro linkUrl lo passo in App.vue quando chiamo la funzione callApi nei methods */
    }
  }
}
</script>

<template>
  <div>
    <button 
    v-for="link in links" 
    :key="link.label" 
    v-html="link.label"    
    :disabled="link.active || link.url === null"
    @click = "callApi(link.url)"
    > 
  </button>
  <!-- la seconda condizione nel :disabled è per disattivare i pulsanti next e previous quando non portano a nessuna pagina. Il loro url sarà null quando non posso andare da nessuna parte cliccandoci -->
  </div>
</template>

<style lang="scss" scoped>
  div{
    display: flex;
    border: 1px solid black;
    background-color: white;
    justify-content: space-around;
    padding: 20px;
    border-radius: 20px;
    button{
      padding: 10px;
      border-radius: 20px;
    }
  }
</style>
