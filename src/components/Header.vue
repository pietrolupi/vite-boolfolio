
<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  components() {},
  methods: {},
  mounted() {},
  computed: {},
}
</script>

<template>
  <header>
    <div>
      <ul>
        <li>
          <router-link :to = "{name:'Home'}"> Home </router-link>
        </li>
        <li>
          <router-link :to = "{name:'About'}"> About </router-link>
        </li>
        <li>
          <router-link :to = "{name:'Contacts'}"> Contacts </router-link>
        </li>
        <li>
          <router-link :to = "{name:'Projects'}"> Projects </router-link>
        </li>
      </ul>
      
    </div>
  </header>
</template>


<style lang="scss" scoped>
  header{
    height: 90px;
    width: 100%;
    background-color: grey;
    color: white;
    text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
    
    display: flex;
    align-items: center;
    justify-content: center;

    ul{
      list-style: none;

      li{
        display: inline-block;
        padding: 20px;

        a{
          color: white;
          text-decoration: none;
          font-size: 2rem;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }

  }
</style>