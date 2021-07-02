<template>

    <div class="border border-2 rounded shadow" style="height:800px">
        <div class="m-0 p-4 bg-secondary border border-primary rounded-top">
            <div class="d-flex justify-content-between align-items-center">
                <p class="h4 text-center">{{ title }}</p>
                 <Dropdown :items="items" ref="dropdown">
                    <template v-slot:dropdown-btn>
                        <button class="btn btn-no-outline-primary btn-icon-sm" type="button" v-on:click="$refs.dropdown.toggleDropdown()">
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                    </template>
                    
                </Dropdown>
                
            </div>
        </div>
        <div  id="text-panel" class="p-4 d-flex flex-wrap justify-content-center overflow-auto" style="height:600px">
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

import Dropdown from "./Dropdown";
import Translatable from "./Translatable";
import TranslatedText from "./TranslatedText";

export default {
    name: "Translator",
    components: {
        Dropdown,
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
        alignText: function(alignment){
            var textClass = document.getElementById("text-panel").classList;
            if (alignment == 'left'){
                textClass.add('justify-content-start');
                textClass.remove('justify-content-center');
                textClass.remove('justify-content-end');
            }else if (alignment == 'center'){
                textClass.remove('justify-content-start');
                textClass.add('justify-content-center');
                textClass.remove('justify-content-end');
            }else if (alignment == 'right'){
                textClass.remove('justify-content-start');
                textClass.remove('justify-content-center');
                textClass.add('justify-content-end');
            }else{
                // throw
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
            items: [
                { label: "Font Size", icon: "fas fa-font", children: [
                    { label: "Large", command: () => { this.setFontSize("20px"); } },
                    { label: "Medium",  command: () => { this.setFontSize("16px"); } },
                    { label: "Small",  children: [
                        { label: "12px", command: () => { this.setFontSize("12px"); } },
                        { label: "10px", command: () => { this.setFontSize("10px"); } },
                        { label: "8px", command: () => { this.setFontSize("8px"); } }
                    ]},
                ]},
                { label: "Alignment", icon: "fas fa-align-center", children: [
                    { label: "Left", command: () => { this.alignText('left'); } },
                    { label: "Center", command: () => { this.alignText('center'); } },
                    { label: "Right", command: () => { this.alignText('right') } },
                ]},
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