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
            type: Object
        },
        target: {
            type: Object
        },
        original: {
            type: String,
            required: true
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
        translate: function(){
            if (this.sourceData != null && this.targetData != null){

                var translation = translationService.translate(this.sourceData, this.targetData, this.originalData);
            
                var translationDetails = {
                    "original": this.originalData,
                    "translation": translation
                };

                this.$emit('translated', translationDetails, true);

            }else{
                // modal to say that languages not chosen
                this.displayErrorModal = true;
                return;
            }  
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
    watch: {
        
    }
    // inject: ["translationService"]

}

</script>

<style scoped>



</style>