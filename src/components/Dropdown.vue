<template>

    <!-- <div class="d-flex flex-column justify-content-start"> -->
        <!-- <button class="btn btn-secondary dropdown-toggle" type="button" v-on:click="toggleDropdown">
            Dropdown button
        </button> -->
        <!-- <div v-if="displayDropdownData" class="container p-2">
            <div class="row">
                <DropdownItem v-for="item in itemData" :key="item" :label="item.label" :command="item.command" :children="item.children" class="col-md-10 offset-md-1"/>
            </div>
            
        </div> -->


        
    <!-- </div> -->

    <div class="mt-dropdown-container">
        <button class="mt-dropdown-btn" type="button" v-on:click="toggleDropdown">
            Dropdown button
        </button>
        <ul v-if="displayDropdownData" class="mt-dropdown ">
            <!-- <div class="row"> -->
            <DropdownItem v-for="item in itemData" :key="item" :label="item.label" :command="item.command" :children="item.children"/>
            <!-- </div> -->
            
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
    position: relative;
    

}

.mt-dropdown-container .mt-dropdown-btn {
    position: absolute;
    left: 50%;
    right: 50%;
    top: 10px;
    bottom: 10px;
}

.mt-dropdown-container .mt-dropdown {
    
    position: absolute;
    left: 50%;
    right: 50%;
    top: 100px;
    list-style-type: none;
    margin: 0;
    padding: 0;
}



</style>