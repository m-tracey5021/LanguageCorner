<template>
    <div class="p-mx-1" v-on:click="translate()">
        <span class="translatable">{{ originalData }}</span>
    </div>
    <Dialog header="Input Error" v-model:visible="displayErrorModal" position="top" :modal="true" >
        Please select both a source and target language.
    </Dialog>
</template>

<script>

import * as translationService from "../services/translationService.js";

export default {
    name: "Translatable",
    props: {
        source: {
            type: String
        },
        target: {
            type: String
        },
        original: {
            type: String,
            required: true
        }  
    },
    data: function(){
        return {
            sourceData: this.source,
            targetData: this.target,
            originalData: this.original,
            displayErrorModal: false
        }
    },
    methods: {
        /*
            api currently:
                supports languages direct to english:
                    Simplified Chinese, Danish, Dutch, French, German, Italian, 
                    Japanese, Norwegian, Polish, Brazilian Portugese, Spanish, Swedish
                supports languages via a proxy language:
                    Greek (French), Hebrew (French), Korean (Japanese), Latin (French),
                    Portugese (French), Russian (French), Turkish (French)
            
        */
        translate: async function(){
            if (this.sourceData != '' && this.targetData != ''){
                
                var translation = await translationService.translate(this.sourceData, this.targetData, this.originalData);
                
                this.$emit('translated', translation, true);

            }else{
                // modal to say that languages not chosen
                this.displayErrorModal = true;
                return;
            }  
        }
    },
    watch: {
        source: function(newValue){
            this.sourceData = newValue;
        },
        target: function(newValue){
            this.targetData = newValue;
        }
    }
    // inject: ["translationService"]

}

</script>

<style scoped>



</style>