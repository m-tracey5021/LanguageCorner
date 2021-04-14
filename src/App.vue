<template>
    <div class="row">
        <div class="col-md-4"></div>      
        <div class="col-md-4"></div>      
        <div class="col-md-4">
            <Reader text="This is the reader box"/>
        </div>      
        
    </div>
    
</template>

<script>

import Reader from './components/Reader'

export default {
  name: 'App',
  components: {
    Reader,
  },
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
