<template>
    <!-- <div class="container p-3">
        <div class="row justify-content-center">
            <div class="col">
                <Reader language="english"/>
            </div>
        </div>
    </div>  -->


    <div class="container">
        <div class="row justify-content-center pt-4">
          <div class="col"></div>
            <div class="col">
                <Table title="Movies" :cols="tableData.cols" :rows="tableData.rows" :collapsible="true"/>
            </div>
            <div class="col">
                <Collapse>
                    <template v-slot:content>
                        <span>Slotted Content</span>
                        <span>Slotted Content</span>
                        <span>Slotted Content</span>
                        <span>Slotted Content</span>
                        <span>Slotted Content</span>
                    </template>
                </Collapse>
            
            </div>
        </div>
    </div> 
     
</template>

<script>

// import * as translationServiceImport from "./services/translationService.js";

// import Reader from "./components/Reader";
import Table from "./components/Table";
import Collapse from "./components/Collapse";
// import Dropdown from "./components/Dropdown";
// import FileSelector from './components/FileSelector.vue';

export default {
    name: 'App',
    components: {
        // Reader,
        Table,
        Collapse
        // Dropdown,
        // FileSelector,
    },
    data: function(){
        return {
            tableData: {
                "cols": [
                    { label: 'Title' },
                    { label: 'Date' },
                    { label: 'Seen' }
                ],
                "rows": [
                    [
                        'Shawshank', '21-07-1998', 'No'
                    ],
                    [
                        'Stuart Little', '28-10-2001', 'No'
                    ]

                ]
            }
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
