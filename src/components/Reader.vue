<template>


    <div class="p-grid pt-2">
        <div class="p-col-8 p-offset-4">
            <div class="p-d-flex p-jc-between">
                <FileSelector instruction="Please select a file" @fileSelected="updateTextReader"/>
                <span class="p-buttonset">
                    <Button label="Edit" icon="pi pi-pencil"/>
                    <Button label="Translate" icon="pi pi-sort-alt"/>
                    <Button label="Clear" icon="pi pi-undo"/>   
                </span>
            </div>
            
        </div>
        
    </div>
    <div class="p-grid">
        <div class="p-col-4">
            <TranslationDetails :translationDetails="translationDetails"/>
        </div>
        <div class="p-col-8">
            <Translator language="en" :text="selectedFile" :title="filename" @translationsUpdated="updateTranslationDetails"/>
        </div>
    </div>
    
</template>

<script>


import FileSelector from "./FileSelector";
import TranslationDetails from "./TranslationDetails";
import Translator from "./Translator";

export default {
    name: "Reader",
    components: {
        
        FileSelector,
        TranslationDetails,
        Translator
    },
    props: {
        language: {
            type: String
        }
    },
    methods: {
        updateTextReader: function(content, filename){
            // document.getElementById("reader").value = content;
            this.filename = filename;
            this.selectedFile = content;
        },
        updateTranslationDetails: function(translationDetails){
            this.translationDetails = translationDetails;
        },
        translateHighlighted: function(){
            var reader = document.getElementById("reader");
            var highlighted = (reader.value).substring(reader.selectionStart, reader.selectionEnd);
            console.log(highlighted);
        }
    },
    data: function(){
        return {
            filename: "No file selected",
            selectedFile: "",
            translationDetails: {}
        }
    }
}

</script>

<style scoped>


</style>