<template>
    <div class="container">
        <div id="file-selector" class="row mb-4">
            <FileSelector instruction="Please select a file" @fileSelected="updateTextReader"/>
        </div>
        <div id="tool-buttons" class="row justify-content-center mb-4">
            <div class="col-md-4">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-secondary">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="btn btn-secondary">
                        <i class="fas fa-highlighter"></i>
                    </button>
                    
                    <button type="button" class="btn btn-secondary">Right</button>
                </div>
            </div>
            
        </div>
        <div id="reader-row" class="row mb-4">
            <textarea id="reader" class="form-control"></textarea>
        </div>
    </div>
    
</template>

<script>

import FileSelector from './FileSelector';

// window.$(document).ready(function(){
//   window.$('[data-toggle="tooltip"]').tooltip();
// });

export default {
    name: 'Reader',
    components: {
        FileSelector
    },
    props: {
        text: String,
    },
    methods: {
        updateTextReader: function(content){
            document.getElementById('reader').value = content;
        }
    },
}

</script>

<style scoped>

    #readerrow {
        height: 100%;
    }

    textarea {
        width: 100%;
        height: 180%;
    }

</style>