<template>

    <div class="mt-dropdown-container">
        <button class="btn btn-outline-primary dropdown-toggle mt-dropdown-btn" type="button" v-on:click="toggleDropdown">
            Dropdown button
        </button>
        <ul v-if="displayDropdownData" class="mt-dropdown">
            <DropdownItem v-for="item in itemData" :key="item" :label="item.label" :command="item.command" :children="item.children"/>
        </ul>
    </div>



</template>

<script>

import DropdownItem from "./DropdownItem";

export default {
    name: 'Dropdown',
    components: {
        DropdownItem
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data: function(){
        return {
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

.pointer {
    cursor: pointer;
}



.mt-dropdown-container {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    

}

.mt-dropdown-container .mt-dropdown {
    list-style-type: none;
    margin: 0;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* max-height: 100px; */
    /* overflow-y: auto; */
}



</style>