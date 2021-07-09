<template>

    <div class="p-grid">
        <div class="p-col-8 p-offset-4">
            <TranslatorToolbar @fileUpdated="updateText" @sourceUpdated="updateSource" @targetUpdated="updateTarget"/>
        </div>
        <div class="p-col-4">
            <TranslationDetails :translationDetails="translationDetails"/>
        </div>
        <div class="p-col-8">
            <Translator :source="sourceLanguage" :target="targetLanguage" :text="text" :title="title" @translationsUpdated="updateTranslationDetails"/>
        </div>
    </div>
    
</template>

<script>

import TranslatorToolbar from './TranslatorToolbar';
import TranslationDetails from './TranslationDetails';
import Translator from './Translator';

export default {
    name: 'Reader',
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
            text: '',
            title: 'No file selected',
            sourceLanguage: '',
            targetLanguage: '',
            translationDetails: {},
        }
    },
    methods: {
        updateText: function(file, filename){
            this.text = file;
            this.title = filename;
            
        },
        updateSource: function(language){
            console.log(language);
            this.sourceLanguage = language;
        },
        updateTarget: function(language){
            console.log(language);
            this.targetLanguage = language;
        },
        updateTranslationDetails: function(translationDetails){
            this.translationDetails = translationDetails;
        },
    }
    
}

</script>

<style scoped>


</style>