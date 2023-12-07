

<script>
  import {store} from '../data/store';

  export default {
  name: 'PaginatorNav',

  props: {
    paginator: Object,
  },

  data() {
    return {
      store,
    };
  },

  props:{

    paginator: Object,

    //raggrupiamo tutti nell'object paginator
    /* links: Array,
    first_page_url: String,
    last_page_url: String,   */  /* props di links (vedi App.vue) */
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
    @click = "callApi(paginator.first_page_url)"
    :disabled="paginator.current_page == 1">
      FIRST 
    </button>

    <button 
    v-for="link in paginator.links" 
    :key="link.label" 
    v-html="link.label"    
    :disabled="link.active || link.url === null"
    @click = "callApi(link.url)"
    > 
    </button>
  <!-- la seconda condizione nel :disabled è per disattivare i pulsanti next e previous quando non portano a nessuna pagina. Il loro url sarà null quando non posso andare da nessuna parte cliccandoci -->

    <button
    @click = "callApi(paginator.last_page_url)"
    :disabled = "paginator.current_page === paginator.last_page">
      LAST 
    </button>

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
