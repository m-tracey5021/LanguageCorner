<template>



    <li v-if="children.length == 0" v-on:click="commandData" class="mt-dropdown-item">
        <div class="item-content">
            <i v-bind:class="iconData"></i>
            <div>{{ labelData }}</div>
        </div>
    </li> 
    <li v-else class="mt-dropdown-submenu-toggle">
        <div v-on:click="toggleChild" class="mt-dropdown-item">
            <div class="item-content">
                <i v-bind:class="iconData"></i>
                <div>{{ labelData }}</div>
            </div>

            <!-- <div> -->
            <i v-bind:id="menuIdData" class="fas fa-angle-right"></i>    
            <!-- </div> -->

            <!-- <div>{{ labelData }}</div>
            <i v-bind:id="menuIdData" class="fas fa-angle-right"></i> -->
        </div>
        
        <ul v-if="displayChildData" class="mt-dropdown-submenu">
            <DropdownItem v-for="child in childrenData" :key="child" :menuId="menuIdData + 1" :label="child.label" :icon="iconData" :command="child.command" :children="child.children"/>
        </ul>
    </li>  

</template>

<script>

export default {
    name: 'DropdownItem',
    props: {
        menuId: {
            type: Number,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: ""
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
            menuIdData: this.menuId,
            labelData: this.label,
            iconData: this.icon + " item-icon",
            commandData: this.command,
            childrenData: this.children,
            displayChildData: false
        }
    },
    methods: {
        toggleChild: function(){

            var arrow = document.getElementById(this.menuIdData).classList;
            if (arrow.contains('rotate-down')){
                arrow.remove('rotate-down');
                arrow.add('rotate-up');
            }else{
                arrow.remove('rotate-up');
                arrow.add('rotate-down');
            }
            this.displayChildData = !this.displayChildData;
        }
    },
    emits: ['itemSelected']
}

</script>

<style>

.item-icon {
    padding-right: 5px;
    margin-bottom: 5px;
}

.item-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}



.mt-dropdown-item {
    cursor: pointer;
    /* border-bottom: 1px solid #c2c2c2; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.mt-dropdown-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.mt-dropdown-submenu-toggle {
    position: relative;
    min-width: 200px;   
}

.mt-dropdown-submenu-toggle .mt-dropdown-submenu {
    position: absolute;
    top: -1px;
    left: calc(100% + 2px);
    list-style-type: none;
    margin: 2, 2, 2, 2;
    padding: 0;
    border: 1px solid rgba(106, 106, 106, 0.2);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

}

.rotate-down {
    -webkit-animation:rotate-down 0.25s ease-out forwards;
    -moz-animation:rotate-down 0.25s ease-out forwards;
    animation:rotate-down 0.25s ease-out forwards;
    

}

.rotate-up {
    -webkit-animation:rotate-up 0.25s ease-out forwards;
    -moz-animation:rotate-up 0.25s ease-out forwards;
    animation:rotate-up 0.25s ease-out forwards;
    

}

/* rotate arrow down */

@-moz-keyframes rotate-down { 
    from {
        -moz-transform: rotate(0deg);
    }    
    to {
        -moz-transform: rotate(90deg);
    }
}

@-webkit-keyframes rotate-down { 
    from {
        -webkit-transform: rotate(0deg);
    }    
    to {
        -webkit-transform: rotate(90deg);
    }
}

@keyframes rotate-down { 
    from {
        transform: rotate(0deg);
    }    
    to {
        transform: rotate(90deg);
    }
}

/* rotate arrow up */

@-moz-keyframes rotate-up { 
    from {
        -moz-transform: rotate(90deg);
    }    
    to {
        -moz-transform: rotate(0deg);
    }
}

@-webkit-keyframes rotate-up { 
    from {
        -webkit-transform: rotate(90deg);
    }    
    to {
        -webkit-transform: rotate(0deg);
    }
}

@keyframes rotate-up { 
    from {
        transform: rotate(90deg);
    }    
    to {
        transform: rotate(0deg);
    }
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