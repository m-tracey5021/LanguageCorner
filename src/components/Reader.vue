<template>


    <div class="container">
        <div class="row">
            <div class="col-9 offset-3">
                <TranslatorToolbar @fileUpdated="updateText" @languageUpdated="updateLanguage"/>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <TranslationDetails :translationDetails="translationDetails"/>
            </div>
            <div class="col-9">
                <Translator :source="sourceLanguage" :target="targetLanguage" :text="file" :title="filename" @translationsUpdated="updateTranslationDetails"/>
            </div>
        </div>
    </div>

    <!-- Second Template -->

    <!-- <div class="p-grid">
        <div class="p-col-4">
            <TranslationDetails :translationDetails="translationDetails"/>
        </div>
        <div class="p-col-8">
            <Translator :source="sourceLanguage" :target="targetLanguage" :text="selectedFile" :title="filename" @translationsUpdated="updateTranslationDetails"/>
        </div>
    </div>
    <Dialog v-model:visible="displayEditModal" :modal="true">
        <template #header>
            <div class="p-d-flex p-jc-start p-mt-3">
                <h3>Edit File</h3>
            </div>
        </template>
        <Textarea v-model="editedFile" rows="10" cols="30" />
        <template #footer>
            <Button label="Save" icon="far fa-save" class="p-button-outlined" v-on:click="saveEdit()"/>
            <Button label="Cancel" icon="far fa-window-close" class="p-button-outlined" v-on:click="cancelEdit()"/>
        </template>
    </Dialog> -->



    <!-- Original Template -->



    <!-- <div class="p-grid pt-2">
        <div class="p-col-8 p-offset-4">
            <div class="p-d-flex p-jc-between">
                <FileSelector instruction="Please select a file" @fileSelected="updateTextReader"/>
                <Dropdown v-model="sourceLanguage" :options="languages" optionLabel="name" optionValue="code" placeholder="Select Source"/>
                <Dropdown v-model="targetLanguage" :options="languages" optionLabel="name" optionValue="code" placeholder="Select Target"/>
                <span class="p-buttonset">
                    <Button label="Edit" icon="far fa-edit" v-on:click="editFile()"/>
                    <Button label="Translate" icon="fas fa-exchange-alt"/>
                    <Button label="Clear" icon="fas fa-undo" v-on:click="clearFile()"/>   
                </span>
            </div>
            
        </div>
        
    </div>
    <div class="p-grid">
        <div class="p-col-4">
            <TranslationDetails :translationDetails="translationDetails"/>
        </div>
        <div class="p-col-8">
            <Translator :source="sourceLanguage" :target="targetLanguage" :text="selectedFile" :title="filename" @translationsUpdated="updateTranslationDetails"/>
        </div>
    </div>
    <Dialog v-model:visible="displayEditModal" :modal="true">
        <template #header>
            <div class="p-d-flex p-jc-start p-mt-3">
                <h3>Edit File</h3>
            </div>
            
        </template>
        <Textarea v-model="editedFile" rows="10" cols="30" />
        <template #footer>
            <Button label="Save" icon="far fa-save" class="p-button-outlined" v-on:click="saveEdit()"/>
            <Button label="Cancel" icon="far fa-window-close" class="p-button-outlined" v-on:click="cancelEdit()"/>
        </template>
    </Dialog> -->
    
</template>

<script>


// import FileSelector from "./FileSelector";
// import LanguageSelect from "./LanguageSelect";
import TranslationDetails from "./TranslationDetails";
import TranslatorToolbar from "./TranslatorToobar";
import Translator from "./Translator";

export default {
    name: "Reader",
    components: {
        
        // FileSelector,
        // LanguageSelect,
        TranslationDetails,
        TranslatorToolbar,
        Translator
    },
    props: {
        language: {
            type: String
        }
    },
    data: function(){
        return {
            file: "",
            filename: "No file selected",
            
            // editedFile: "",
            sourceLanguage: null,
            targetLanguage: null,
            // sourceDisplay: "Select Source",
            // targetDisplay: "Select Target",
            // languages: [
            //     { name: 'Arabic', code: 'ar' },
            //     { name: 'Chinese', code: 'zh' },
            //     { name: 'Danish', code: 'dk' },
            //     { name: 'Dutch', code: 'nl' },
            //     { name: 'English', code: 'en' },
            //     { name: 'French', code: 'fr' },
            //     { name: 'German', code: 'de' },
            //     { name: 'Greek', code: 'el' },
            //     { name: 'Hebrew', code: 'he' },
            //     { name: 'Italian', code: 'it' },
            //     { name: 'Japanese', code: 'ja' },
            //     { name: 'Korean', code: 'ko' },
            //     { name: 'Latin', code: 'la' },
            //     { name: 'Norwegian', code: 'no' },
            //     { name: 'Polish', code: 'pl' },
            //     { name: 'Portugese', code: 'pt' },
            //     { name: 'Brazilian Portugese', code: 'br' },
            //     { name: 'Russian', code: 'ru' },
            //     { name: 'Spanish', code: 'es' },
            //     { name: 'Swedish', code: 'sv' },
            //     { name: 'Turkish', code: 'tr' },
            // ],
            translationDetails: {},
            // displayEditModal: false
        }
    },
    methods: {
        updateText: function(file, filename){
            // document.getElementById("reader").value = content;
            this.file = file;
            this.filename = filename;
            
        },
        updateLanguage: function(language, direction){
            if (direction == 'source'){
                this.sourceLanguage = language;
            }else{
                this.targetLanguage = language;
            }
        },
        updateTranslationDetails: function(translationDetails){
            this.translationDetails = translationDetails;
        },
        editFile: function(){
            this.editedFile = this.selectedFile;
            this.displayEditModal = true;
        },
        saveEdit: function(){
            this.selectedFile = this.editedFile;
            this.displayEditModal = false;
        },
        cancelEdit: function(){
            this.displayEditModal = false;
        },
        highlighFile: function(){

        },
        clearFile: function(){

        }
    }
    
}

</script>

<style scoped>

.pointer {
    cursor: pointer;
}

.scrollable {
    height: 200px;
    overflow-y: auto;
}

</style>