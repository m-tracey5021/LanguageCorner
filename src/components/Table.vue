<template>

    <div class="mt-table-container">




        <div v-if="collapsibleData">
            <div class="mt-table-title">

                <button type="button" v-on:click="expandTable">{{ titleData }}</button>
            </div>    
            <div id="tableWrapper" class="collapsible">
                <div id="table" class="mt-table">
                    <div v-for="(col, index) in colData" :key="col" class="mt-table-col">
                        <div v-if="col.label == ''">
                            <div v-for="row in rowData" :key="row" class="mt-table-row">
                                {{ row[index] }}
                            </div>
                        </div>
                        <div v-else>
                            <div class="mt-table-header">
                                {{ col.label }}
                            </div>
                            <div v-for="row in rowData" :key="row" class="mt-table-row">
                                {{ row[index] }}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div v-else>
            <div class="mt-table-title">
                {{ titleData }}
            </div>
            <div id="table" class="mt-table">
                <div v-for="(col, index) in colData" :key="col" class="mt-table-col">
                    <div v-if="col.label == ''">
                        <div v-for="row in rowData" :key="row" class="mt-table-row">
                            {{ row[index] }}
                        </div>
                    </div>
                    <div v-else>
                        <div class="mt-table-header">
                            {{ col.label }}
                        </div>
                        <div v-for="row in rowData" :key="row" class="mt-table-row">
                            {{ row[index] }}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    
    </div>    
    
    
    

</template>

<script>
// import Reader from './Reader.vue';

export default {
    name: 'Table',
    components: {
        // Reader
    
    },
    props: {
        title: {
            type: String,
            default: ""
        },
        cols: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true
        },
        collapsible: {
            type: Boolean,
            default: false
        }
    },
    data: function(){
        return {
            titleData: this.title,
            colData: this.cols,
            rowData: this.rows,
            collapsibleData: this.collapsible,
        }
    },
    methods: {
        expandTable: function(){
            var tableWrapper = document.getElementById('tableWrapper');
            if (tableWrapper.clientHeight){
                tableWrapper.style.height = 0;
            }else{
                var table = document.getElementById('table');
                var expandedHeight = table.clientHeight + 5;
                tableWrapper.style.height = expandedHeight + 'px';
            }
        }
    }
}

</script>

<style scoped>

.mt-table-container {
    padding: 10px;
    border: 1px solid rgba(106, 106, 106, 0.3);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.mt-table-title {
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    font-weight: bolder;
    letter-spacing: 3px;
    margin-bottom: 10px;
    margin-top: 10px;

}

.mt-table {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 20px;
    margin: 0;
    border: 1px solid rgba(106, 106, 106, 0.3);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.mt-tabel-col {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2px;
    margin: 5px;
}

.mt-table-row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 2px;
    
}

.mt-table-header {
    font-size: 1.25rem;
    letter-spacing: 3px;
}

.collapsible {
    -moz-transition: height .25s;
    -webkit-transition: height .25s;
    transition: height .25s;
    height: 0;
    overflow: hidden;
}

</style>