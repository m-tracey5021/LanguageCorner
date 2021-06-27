<template>
    <div class="p-mx-1" v-on:click="translate()">
        <span id="translatable">{{ originalData }}</span>
    </div>
</template>

<script>

import * as translationService from "../services/translationService.js";

export default {
    name: "Translatable",
    props: {
        language: {
            type: String,
            required: true
        },
        original: {
            type: String,
            required: true
        },
        size: {
            type: String
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
            
            // var translation = this.translationService.translate(this.originalData);
            var translation = translationService.translate(this.originalData);
            

            var translationDetails = {
                "original": this.originalData,
                "translation": translation
            };

            this.$emit('translated', translationDetails, true);

            
            
        }
    },
    data: function(){
        return {
            languageData: this.language,
            originalData: this.original,
            translationData: "",
            translationService: null
        }
    },
    watch: {
        size: function(newValue){
            var element = document.getElementById("translatable");
            if (newValue == "small"){
                element.style.fontSize = "12px";
                // element.style.height = "50%";
            }else if (newValue == "large"){
                element.style.fontSize = "20px";
                // element.style.height = "150%";
            }else{
                element.style.fontSize = "16px";
                // element.style.height = "100%";
            }
        }
    }
    // inject: ["translationService"]

}

</script>

<style scoped>

.size-large {
    width: 150%;
    height: 150%;
}

.size-medium {
    width: 100%;
    height: 100%;
}

.size-small {
    width: 50%;
    height: 50%;
}

</style>