<template>

    <div class="mt-dropdown-container">
        <slot name="dropdown-btn">
            <button class="btn btn-outline-primary dropdown-toggle" type="button" v-on:click="toggleDropdown">
                Select: 
            </button>
        </slot>
        
        <ul v-if="displayDropdownData" class="mt-dropdown">
            <DropdownItem v-for="item in itemData" :key="item" :menuId="1" :label="item.label" :icon="item.icon" :command="item.command" :children="item.children"/>
        </ul>
    </div>
    <div v-if="displayDropdownData == true" class="overlay-escape" v-on:click="displayDropdownData = false"></div>



</template>

<script>

import DropdownItem from "./DropdownItem";

export default {
    name: 'Dropdown',
    components: {
        DropdownItem
    },
    props: {
        text: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    data: function(){
        return {
            textData: this.text,
            itemData: this.items,
            displayDropdownData: false
            
        }
    },
    methods: {
        toggleDropdown: function(){
            this.displayDropdownData = !this.displayDropdownData;
        }
    }
}

</script>

<style>

.mt-dropdown-container {
    display: flex;
    flex-direction: column;
    /* max-width: 200px; */
    z-index: 10;
    

}

.mt-dropdown-container .mt-dropdown {
    list-style-type: none;
    margin: 0;
    padding: 0;
    border: 1px solid rgba(106, 106, 106, 0.2);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.overlay-escape {
    opacity:    0.5; 
    background: #000; 
    width:      100%;
    height:     100%; 
    z-index:    0;
    top:        0; 
    left:       0; 
    position:   fixed; 
}


</style>