<template>


    <Panel :header="title" class="p-shadow-5" style="height:800px">
        <template #icons>
            <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
                <span class="pi pi-cog"></span>
            </button>
            <TieredMenu id="config-menu" ref="menu" :model="menuItems" :popup="true" />
        </template>
        <div id="text-panel" class="p-d-flex p-flex-wrap p-jc-center">
            <span v-for="word in originalData" :key="word">
                <span v-if="isTranslated(word)">
                    <TranslatedText :translationDetails="getTranslated(word)" :showTooltip="false" @translationSelected="updateTranslationData"/>
                </span>
                <span v-else>
                    <Translatable :language="languageData" :original="word" :size="fontSize" @translated="updateTranslationData"/>
                </span>
            </span>
        </div>
    </Panel>
    
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
        },
    },
    methods: {
        // isAlpha: function(str){
        //     return str.length === 1 && str.match(/[a-z]/i);
        // },
        // trim: function(word){
        //     for (var i = 0; i < word.length; i ++){
        //         if (!this.isAlpha(word.charAt(i))){
        //             word = word.substring(0, i) + word.substring(i + 1);
        //         }
        //     }
        //     return word.toLowerCase();
        // },
        toggle: function(event){
            this.$refs.menu.toggle(event);
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
                    return this.translationData[i];
                }
            }
            return {};
        },
        updateTranslationData: function(translationDetails, newTranslation){
            if (newTranslation == true){
                this.translationData.push(translationDetails);
            }
            this.$emit("translationsUpdated", translationDetails);
        }
    },
    data: function(){
        return {
            languageData: this.language,
            originalData: this.text.split(" "),
            translationData: [],
            titleData: this.title,
            menuItems: [
                {
                    label: "Font Size",
                    items: 
                    [
                        { label: "Large", icon: "fas fa-font fa-lg", command: () => { this.fontSize = "large"; }},
                        { label: "Medium",  icon: "fas fa-font", command: () => { this.fontSize = "medium" }},
                        { label: "Small",  icon: "fas fa-font fa-xs", command: () => { this.fontSize = "small" }},

                    ]
                },
                {
                    label: "Alignment",
                    items: 
                    [
                        { label: "Left", icon: "fas fa-align-left", command: () => { 
                            var textClass = document.getElementById("text-panel").classList;
                            textClass.add("p-jc-start");
                            textClass.remove("p-jc-center");
                            textClass.remove("p-jc-end");
                        }},
                        { label: "Center", icon: "fas fa-align-center", command: () => { 
                            var textClass = document.getElementById("text-panel").classList;
                            textClass.remove("p-jc-start");
                            textClass.add("p-jc-center");
                            textClass.remove("p-jc-end");
                        }},
                        { label: "Right", icon: "fas fa-align-right", command: () => { 
                            var textClass = document.getElementById("text-panel").classList;
                            textClass.remove("p-jc-start");
                            textClass.remove("p-jc-center");
                            textClass.add("p-jc-end");    
                        }},

                    ]
                }
            ],
            fontSize: "medium",
        }
    },
    watch: {
        text: function(newValue){
            this.originalData = newValue.split(" ");
            this.translationData = [];
            
        },
        title: function(newValue){
            this.titleData = newValue;
        }
    }
}

</script>

<style scoped>


</style>