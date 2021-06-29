<template>
    <!-- <div class="p-grid">
        <div class="p-col-8 p-offset-2 p-mt-5">
            <Reader language="english"/>
        </div>
    </div>   -->
    <div class="container">
        <div class="row justify-content-center">
            <!-- <div class="col"></div> -->
            <div class="col-md-auto">
                <Reader language="english"/>
            </div>
            <!-- <div class="col"></div> -->
        </div>
    </div> 
     
</template>

<script>

// import * as translationServiceImport from "./services/translationService.js";

import Reader from "./components/Reader";

export default {
    name: 'App',
    components: {
        Reader,
    },
    // provide(){
    //     return {
    //         translationService: "injected"
    //     }
    // }
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
