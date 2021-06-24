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
            <Translator language="english" :text="selectedFile"/>
        </div>

    </div>
    
</template>

<script>

import FileSelector from "./FileSelector";
import Translator from "./Translator";

export default {
    name: "Reader",
    components: {
        FileSelector,
        Translator
    },
    props: {
        language: {
            type: String
        }
    },
    methods: {
        updateTextReader: function(content){
            // document.getElementById("reader").value = content;
            this.selectedFile = content;
        },
        translateHighlighted: function(){
            var reader = document.getElementById("reader");
            var highlighted = (reader.value).substring(reader.selectionStart, reader.selectionEnd);
            console.log(highlighted);
        }
    },
    data: function(){
        return {
            selectedFile: ""
        }
    }
}

</script>

<style scoped>


</style>