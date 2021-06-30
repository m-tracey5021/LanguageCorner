<template>


    <li v-if="children.length == 0" v-on:click="commandData" class="mt-dropdown-item">{{ labelData }}</li> 
    <li v-else v-on:click="toggleChild" class="mt-dropdown-item">{{ labelData }}</li>  
    <!-- <div v-for="child in childrenData" :key="child">
        <DropdownItem :label="child.label" :command="child.command" :children="child.children"/>
    </div> -->
    <ul v-if="displayChildData" class="mt-dropdown-submenu">
        <DropdownItem v-for="child in childrenData" :key="child" :label="child.label" :command="child.command" :children="child.children"/>
    </ul>
            

</template>

<script>

export default {
    name: 'DropdownItem',
    props: {
        label: {
            type: String,
            required: true
        },
        command: {
            type: Function,
            default: () => { console.log('default function called'); }
        },
        children: {
            type: Array,
            default: () => { return []; }
        }
    },
    data: function(){
        return {
            labelData: this.label,
            commandData: this.command,
            childrenData: this.children,
            displayChildData: false
        }
    },
    methods: {
        toggleChild: function(){
            this.displayChildData = !this.displayChildData;
        }
    }
}

</script>

<style>

.mt-dropdown-item {
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    
}

.mt-dropdown-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.mt-dropdown .mt-dropdown-submenu {
    position: absolute;
    left: calc(100% + 5px);
    list-style-type: none;
    margin: 2, 2, 2, 2;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.mt-dropdown-submenu .mt-dropdown-submenu {
    position: absolute;
    left: calc(100% + 5px);
    list-style-type: none;
    margin: 2, 2, 2, 2;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}   

</style>