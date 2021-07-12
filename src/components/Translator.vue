<template>


    <Panel :header="title" class="p-shadow-5" style="height:800px">
        <template #icons>
            <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
                <span class="fas fa-ellipsis-v"></span>
            </button>
            <TieredMenu id="config-menu" ref="menu" :model="menuItems" :popup="true" />
        </template>
        <div class="p-panel-content p-shadow-1 scrollable">
            <div v-if="loaded" id="text-panel" class="p-d-flex p-flex-wrap p-jc-center">
                <span v-for="word in textData" :key="word">
                    <span v-if="isTranslated(word)">
                        <TranslatedText :translationDetails="getTranslated(word)" :showTooltip="false" @translationSelected="updateTranslationData"/>
                    </span>
                    <span v-else>
                        <Translatable :source="sourceData" :target="targetData" :original="word" @translated="updateTranslationData"/>
                    </span>
                </span>
            </div>
            <div v-else class="p-d-flex p-jc-center p-ai-center">
                <i class="fas fa-spinner fa-spin"/>
            </div>
            
            
        </div>
        <!-- <div id="footer">
            <span class="p-panel-header" style="width:100%">Translation Count: {{ translationCount }}</span>
        </div> -->
    </Panel>
    
</template>

<script>

import Translatable from './Translatable';
import TranslatedText from './TranslatedText';

export default {
    name: 'Translator',
    components: {
        Translatable,
        TranslatedText
    },
    props: {
        source: {
            type: String
        },
        target: {
            type: String
        },
        text: {
            type: String,
            required: true
        },
        title: {
            type: String
        },
    },
    data: function(){
        return {
            sourceData: this.source,
            targetData: this.target,
            textData: this.text.split(" "),
            titleData: this.title,
            translationData: [],
            translationCount: 0,
            
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
                        { label: "Left", icon: "fas fa-align-left", command: () => { this.setAlignment('left'); }},
                        { label: "Center", icon: "fas fa-align-center", command: () => { this.setAlignment('center'); }},
                        { label: "Right", icon: "fas fa-align-right", command: () => { this.setAlignment('right'); }},

                    ]
                }
            ],
            loaded: false
        }
    },
    methods: {
        toggle: function(event){
            this.$refs.menu.toggle(event);
        },
        setFontSize: function(size){
            var elements = document.getElementsByClassName('translatable');
            for (var i = 0; i < elements.length; i ++){
                elements[i].style.fontSize = size;
            }
        },
        setAlignment: function(alignment){
            var textClass = document.getElementById("text-panel").classList;
            if (alignment == 'left'){
                textClass.add("p-jc-start");
                textClass.remove("p-jc-center");
                textClass.remove("p-jc-end");
            }else if (alignment == 'center'){
                textClass.remove("p-jc-start");
                textClass.add("p-jc-center");
                textClass.remove("p-jc-end");
            }else if (alignment == 'right'){
                textClass.remove("p-jc-start");
                textClass.remove("p-jc-center");
                textClass.add("p-jc-end");
            }
        },
        isTranslated: function(word){
            for (var i = 0; i < this.translationData.length; i ++){
                debugger;
                if (this.translationData[i].text == word){
                    return true;
                }
            }
            return false;
        },
        getTranslated: function(word){
            for (var i = 0; i < this.translationData.length; i ++){
                if (this.translationData[i].text == word){
                    return this.translationData[i];
                }
            }
            return {};
        },
        updateTranslationData: function(translation, newTranslation){
            if (newTranslation == true){
                this.translationData.push(translation);
                this.translationCount ++;
            }
            this.$emit('translationsUpdated', translation);
        }
    },
    
    watch: {
        source: function(newValue){
            this.sourceData = newValue;
        },
        target: function(newValue){
            this.targetData = newValue;
        },
        text: function(newValue){
            this.loaded = false;
            this.textData = newValue.split(' ');
            this.translationData = [];
            this.loaded = true;
            
        },
        title: function(newValue){
            this.titleData = newValue;
        }
    }
}

</script>

<style scoped>

.scrollable {
    height: 620px;
    overflow-y: auto;
}

</style>