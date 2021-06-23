<template>
    <div class="container">
        <div id="tools" class="row mt-4 mb-2">
            <div class="col-md-auto">
                <FileSelector instruction="Please select a file" @fileSelected="updateTextReader"/>
            </div>
            <div class="col-md-auto">
                <div id="tool-buttons" class="row justify-content-center mb-4">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-secondary">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="btn btn-secondary">
                            <i class="fas fa-highlighter"></i>
                        </button>
                        <button type="button" class="btn btn-secondary">
                            <i class="fas fa-undo"></i>
                        </button>
                    </div> 
                </div>
                  
            </div>
        </div>
        <div class="row">
            <textarea id="reader" class="form-control"></textarea>
        </div>
        
    </div>
    
</template>

<script>

import FileSelector from './FileSelector';

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

    #reader {
        width: 600px;
        height: 800px;
    }

</style>