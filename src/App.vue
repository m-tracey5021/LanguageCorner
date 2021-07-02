<template>
    <div class="container p-3">
        <div class="row justify-content-center">
            <div class="col">
                <Reader language="english"/>
            </div>
        </div>
    </div> 


    <!-- <div class="container">
        <div class="row justify-content-center pt-4">
          <div class="col"></div>
            <div class="col">
                <Dropdown text="Select a position" :items="items" ref="dropdown">
                    <template v-slot:dropdown-btn>
                        <button class="btn btn-outline-primary btn-icon-sm-sq" type="button" v-on:click="this.$refs.dropdown.toggleDropdown()">
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                    </template>
                    
                </Dropdown>
            </div>
            <div class="col"></div>
        </div>
    </div>  -->
     
</template>

<script>

// import * as translationServiceImport from "./services/translationService.js";

import Reader from "./components/Reader";
// import Dropdown from "./components/Dropdown";
// import FileSelector from './components/FileSelector.vue';

export default {
    name: 'App',
    components: {
        Reader,
        // Dropdown,
        // FileSelector,
    },
    data: function(){
        return {
            
        }
    },
    methods: {

    }
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
