<template>
    <!-- <div class="container">
        <div class="row justify-content-center">
            <div class="col">
                <Reader language="english"/>
            </div>
        </div>
    </div>  -->
    <div class="container">
        <div class="row justify-content-center">
          <div class="col"></div>
            <div class="col">
                <Dropdown text="Select a position" :items="items"/>
            </div>
            <div class="col"></div>
        </div>
    </div> 
     
</template>

<script>

// import * as translationServiceImport from "./services/translationService.js";

// import Reader from "./components/Reader";
import Dropdown from "./components/Dropdown";

export default {
    name: 'App',
    components: {
        // Reader,
        Dropdown,
    },
    data: function(){
        return {
            items: [
              { label: "First", icon: "far fa-angry", command: () => { console.log('first'); } },
              { label: "Second", icon: "fas fa-archway", command: () => { console.log('second'); } },
              { label: "Third", command: () => { console.log('third'); }, children: [
                  { label: "Third-First", command: () => { console.log('third-first'); } },
                  { label: "Third-Second", icon: "fas fa-map-marker", command: () => { console.log('third-second'); }, children: [
                      { label: "Third-First-First", command: () => { console.log('third-first-first'); } },
                      { label: "Third-First-Second", command: () => { console.log('third-first-second'); }, children: [
                          { label: "3-1-2-1", command: () => { console.log('3-1-2-1'); } },
                          { label: "3-1-2-2", command: () => { console.log('3-1-2-2'); } },
                          { label: "3-1-2-3", command: () => { console.log('3-1-2-3'); } }
                      ]}
                  ]}  
              ]},
              { label: "Fourth", command: () => { console.log('fourth'); }}
            ],
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
