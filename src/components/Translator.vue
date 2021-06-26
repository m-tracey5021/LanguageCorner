<template>


    <Panel :header="titleData" class="p-shadow-5" style="height:800px">
        <template #icons>
            <button class="p-panel-header-icon p-link p-mr-2" v-on:click="settings()">
                <span class="pi pi-cog"></span>
            </button>
        </template>
        <span v-for="word in originalData" :key="word">
            <span v-if="isTranslated(word)">

                <TranslatedText :original="word" :translated="getTranslated(word)" :showTooltip="false"/>
            </span>
            <span v-else>
                <Translatable :language="languageData" :original="word" @translated="translationsUpdated"/>
                <!-- {{ word + " " }} -->
            </span>
        </span>
        <span>wee</span>
        <span>woo</span>
        <span>wee</span>
        <span>woo</span>
        <span>wee</span>
        <span>woo</span>
    </Panel>



    <!-- <div class="container">
        <div class="row">
            <div id="reader" class="hvr-overline-from-center pt-4 border rounded shadow-sm p-3 mb-5 bg-white">
                <span v-for="word in originalWordData" :key="word">
                    <span v-if="word == 'highlighted'">
    
                        <Translatable :word="word" :language="language"/>
                    </span>
                    <span v-else>
                        {{ word + " " }}
                    </span>
                </span>
            </div>
        </div>
    </div> -->
    
</template>

<script>

import Translatable from "./Translatable";
import TranslatedText from "./TranslatedText";

export default {
    name: "Translator",
    components: {
        Translatable,
        TranslatedText
    },
    props: {
        language: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        isAlpha: function(str){
            return str.length === 1 && str.match(/[a-z]/i);
        },
        trim: function(word){
            for (var i = 0; i < word.length; i ++){
                if (!this.isAlpha(word.charAt(i))){
                    word = word.substring(0, i) + word.substring(i + 1);
                }
            }
            return word.toLowerCase();
        },
        settings: function(){

        },
        isTranslated: function(word){
            for (var i = 0; i < this.translationData.length; i ++){
                if (this.translationData[i].original == word){
                    return true;
                }
            }
            return false;
        },
        getTranslated: function(word){
            for (var i = 0; i < this.translationData.length; i ++){
                if (this.translationData[i].original == word){
                    return this.translationData[i].translation;
                }
            }
            return "";
        },
        translationsUpdated: function(translationDetails){
            this.translationData.push(translationDetails);
            this.$emit("translationsUpdated", translationDetails);
        }
    },
    data: function(){
        return {
            languageData: this.language,
            originalData: this.text.split(" "),
            translationData: [],
            titleData: this.title
        }
    },
    watch: {
        text: function(newValue){
            this.originalWordData = newValue.split(" ");
            this.translationData = [];
            
        }
    }
}

</script>

<style scoped>


</style>