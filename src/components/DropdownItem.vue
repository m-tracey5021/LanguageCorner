<template>



    <li v-if="children.length == 0" v-on:click="commandData" class="mt-dropdown-item-content">{{ labelData }}</li> 
    <li v-else class="mt-dropdown-item">
        <div v-on:click="toggleChild" class="mt-dropdown-item-content">
            <div>{{ labelData }}</div>
            <i id="arrow" class="fas fa-angle-right"></i>
        </div>
        
        <ul v-if="displayChildData" class="mt-dropdown-submenu">
            <DropdownItem v-for="child in childrenData" :key="child" :label="child.label" :command="child.command" :children="child.children"/>
        </ul>
    </li>  


    
    


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
            document.getElementById('arrow').classList.toggle('rotate-down');
            this.displayChildData = !this.displayChildData;
        }
    },
    emits: ['itemSelected']
}

</script>

<style>


.mt-dropdown-item {
    position: relative;
    min-width: 150px;

    
}

.mt-dropdown-item-content {
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.mt-dropdown-item-content:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.mt-dropdown-item .mt-dropdown-submenu {
    position: absolute;
    top: -1px;
    left: calc(100% + 2px);
    list-style-type: none;
    margin: 2, 2, 2, 2;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}

.rotate-down {
    transform: rotate(90deg);
    transition: transform 1s ease-out;

}


/* .mt-dropdown .mt-dropdown-submenu {
    position: absolute;
    top: calc(100% + 5px);
    left: calc(100% + 5px);
    list-style-type: none;
    margin: 2, 2, 2, 2;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
} */

/* .mt-dropdown-submenu .mt-dropdown-submenu {
    position: absolute;
    top: calc(100% + 5px);
    left: calc(100% + 5px);
    list-style-type: none;
    margin: 2, 2, 2, 2;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}    */

</style>