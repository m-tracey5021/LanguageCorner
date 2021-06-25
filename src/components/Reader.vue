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
            <!-- <div class="p-grid">
                <div class="p-col-6">
                    <FileSelector instruction="Please select a file" @fileSelected="updateTextReader"/>
                </div>
                <div class="p-col-6">
                    <span class="p-buttonset">
                        <Button label="Edit" icon="pi pi-pencil"/>
                        <Button label="Translate" icon="pi pi-sort-alt"/>
                        <Button label="Clear" icon="pi pi-undo"/>   
                    </span>
                </div>
            </div> -->
            
            
        </div>
        
    </div>
    <div class="p-grid p-ai-stretched vertical-container">
        <div class="p-col-4">
            <TranslationBox original="ola" translation="hello"/>
            <DetailsBox original="ola" pos="greeting" gender="none" case="none"/>
            <AnnotationBox original="ola" annotation="A common greeting"/>
        </div>
        <div class="p-col-8">
            <Translator language="en" :text="selectedFile" class="box box-stretched"/>
        </div>
    </div>

    <!-- <div class="container">
        <div id="tools" class="row mt-4 mb-2">
            <div class="col-md-auto">
                <FileSelector instruction="Please select a file" @fileSelected="updateTextReader"/>
            </div>
            <div class="col-md-auto">
                <div id="tool-buttons" class="row justify-content-center mb-4">
                    <div class="btn-group" role="group">
                          
                        <button type="button" class="btn btn-secondary">
                            <ToolTip text="Edit">
                                <i class="fas fa-edit"></i>
                            </ToolTip>
                        </button>
                        <button type="button" class="btn btn-secondary">
                            <ToolTip text="Translate">
                                <i class="fas fa-highlighter"></i>
                            </ToolTip>
                        </button>
                        <button type="button" class="btn btn-secondary">
                            <ToolTip text="Reset">
                                <i class="fas fa-undo"></i>
                            </ToolTip>
                        </button>
                    </div> 
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="row mb-4">
                    <TranslationBox original="ola" translation="hello"/>
                </div>
                <div class="row mb-4">
                    <DetailsBox original="ola" pos="greeting" gender="none" case="none"/>
                </div>
                <div class="row mb-4">
                    <AnnotationBox original="ola" annotation="A common greeting"/>
                </div>
                
                
                
            </div>
            <div class="col-md-8">
                
                <div class="row">
                    <Translator language="en" :text="selectedFile"/>
                </div>
            </div>


        </div>


        

    </div> -->
    
</template>

<script>


import FileSelector from "./FileSelector";
// import ToolTip from "./ToolTip";
import TranslationBox from "./TranslationBox";
import DetailsBox from "./DetailsBox";
import AnnotationBox from "./AnnotationBox";
import Translator from "./Translator";

export default {
    name: "Reader",
    components: {
        
        FileSelector,
        // ToolTip,
        TranslationBox,
        DetailsBox,
        AnnotationBox,
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