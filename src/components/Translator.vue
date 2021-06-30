<template>

    <div class="border border-2 rounded shadow bg-body" style="height:800px">
        <div class="m-0 p-4 bg-secondary border border-primary rounded-top">
            <div class="d-flex justify-content-between align-items-center">
                <p class="h4 text-center">{{ title }}</p>
                <div class="dropdown">
                    <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li class="dropdown-submenu">
                            <ul class="dropdown-menu">
                                <li class="dropdown-item">Item 1</li>
                                <li class="dropdown-item">Item 2</li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <ul class="dropdown-menu">
                                <li class="dropdown-item">Item 3</li>
                                <li class="dropdown-item">Item 4</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button type="button" class="rounded-circle" data-bs-toggle="dropdown">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-submenu">
                        <ul class="dropdown-menu">
                            <li class="dropdown-item">Item 1</li>
                            <li class="dropdown-item">Item 2</li>
                        </ul>
                    </li>
                    <li class="dropdown-submenu">
                        <ul class="dropdown-menu">
                            <li class="dropdown-item">Item 3</li>
                            <li class="dropdown-item">Item 4</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="p-4 d-flex flex-wrap justify-content-center overflow-auto" style="height:600px">
            <span v-for="word in originalData" :key="word">
                <span v-if="isTranslated(word)">
                    <TranslatedText :translationDetails="getTranslated(word)" :showTooltip="false" @translationSelected="updateTranslationData"/>
                </span>
                <span v-else>
                    <Translatable :source="sourceData" :target="targetData" :original="word" @translated="updateTranslationData"/>
                </span>
            </span>
        </div>
        
    </div>


    <!-- <Panel :header="title" class="p-shadow-5" style="height:800px">
        <template #icons>
            <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
                <span class="fas fa-ellipsis-v"></span>
            </button>
            <TieredMenu id="config-menu" ref="menu" :model="menuItems" :popup="true" />
        </template>
        <div class="p-panel-content p-shadow-1 scrollable">
            <div v-if="loaded" id="text-panel" class="p-d-flex p-flex-wrap p-jc-center">
                <span v-for="word in originalData" :key="word">
                    <span v-if="isTranslated(word)">
                        <TranslatedText :translationDetails="getTranslated(word)" :showTooltip="false" @translationSelected="updateTranslationData"/>
                    </span>
                    <span v-else>
                        <Translatable :source="sourceData" :target="targetData" :original="word" @translated="updateTranslationData"/>
                    </span>
                </span>
            </div>
            <div v-else>
                <i class="fas fa-spinner fa-spin"/>
            </div>
            
            
        </div>
    </Panel> -->
    
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
        source: {
            type: Object
        },
        target: {
            type: Object
        },
        text: {
            type: String,
            required: true
        },
        title: {
            type: String
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
        setFontSize: function(size){
            var elements = document.getElementsByClassName("translatable");
            for (var i = 0; i < elements.length; i ++){
                elements[i].style.fontSize = size;
            }
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
                this.translationCount ++;
            }
            this.$emit("translationsUpdated", translationDetails);
        }
    },
    data: function(){
        return {
            sourceData: this.source,
            targetData: this.target,
            originalData: this.text.split(" "),
            translationData: [],
            translationCount: 0,
            titleData: this.title,
            menuItems: [
                {
                    label: "Font Size",
                    items: 
                    [
                        { label: "Large", icon: "fas fa-font fa-lg", command: () => { this.setFontSize("20px"); }},
                        { label: "Medium",  icon: "fas fa-font", command: () => { this.setFontSize("16px"); }},
                        { label: "Small",  icon: "fas fa-font fa-xs", command: () => { this.setFontSize("12px"); }},

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
            loaded: false
        }
    },
    watch: {
        text: function(newValue){
            this.loaded = false;
            this.originalData = newValue.split(" ");
            this.translationData = [];
            this.loaded = true;
            
        },
        title: function(newValue){
            this.titleData = newValue;
        }
    },
    emits: ["translationsUpdated"]
}

</script>

<style scoped>

.dropdown-submenu {
    position: absolute;
    
}

.scrollable {
    height: 620px;
    overflow-y: auto;
}

</style>