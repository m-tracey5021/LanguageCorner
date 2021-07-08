<template>

    <div class="p-grid">
        <div class="p-col-8 p-offset-4">
            <TranslatorToolbar @fileUpdated="updateTextReader" @languageUpdated=""/>
        </div>
        <div class="p-col-4">
            <TranslationDetails :translationDetails="translationDetails"/>
        </div>
        <div class="p-col-8">
            <Translator :source="sourceLanguage" :target="targetLanguage" :text="selectedFile" :title="filename" @translationsUpdated="updateTranslationDetails"/>
        </div>
    </div>
    
</template>

<script>

import TranslatorToolbar from './TranslatorToolbar';
import TranslationDetails from './TranslationDetails';
import Translator from './Translator';

export default {
    name: "Reader",
    components: {
        
        TranslatorToolbar,
        TranslationDetails,
        Translator
    },
    props: {
        language: {
            type: String
        }
    },
    data: function(){
        return {
            filename: "No file selected",
            selectedFile: "",
            editedFile: "",
            sourceLanguage: null,
            targetLanguage: null,
            languages: [
                { name: 'Arabic', code: 'ar' },
                { name: 'Chinese', code: 'zh' },
                { name: 'Danish', code: 'dk' },
                { name: 'Dutch', code: 'nl' },
                { name: 'English', code: 'en' },
                { name: 'French', code: 'fr' },
                { name: 'German', code: 'de' },
                { name: 'Greek', code: 'el' },
                { name: 'Hebrew', code: 'he' },
                { name: 'Italian', code: 'it' },
                { name: 'Japanese', code: 'ja' },
                { name: 'Korean', code: 'ko' },
                { name: 'Latin', code: 'la' },
                { name: 'Norwegian', code: 'no' },
                { name: 'Polish', code: 'pl' },
                { name: 'Portugese', code: 'pt' },
                { name: 'Brazilian Portugese', code: 'br' },
                { name: 'Russian', code: 'ru' },
                { name: 'Spanish', code: 'es' },
                { name: 'Swedish', code: 'sv' },
                { name: 'Turkish', code: 'tr' },
            ],
            translationDetails: {},
            displayEditModal: false
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
        }
    }
    
}

</script>

<style scoped>


</style>