<template>

    
    <Fieldset id="simple-translation" legend="Simple Translation" :toggleable="true" :collapsed="true" class="p-mb-5 p-shadow-4">
        <div>
            
        </div>
    </Fieldset>
    <Fieldset id="translation-details" legend="Translation Details" :toggleable="true" :collapsed="true" class="p-my-5 p-shadow-4">
        <div v-for="detail in detailsData" :key="detail">
            <Switch :left="detail.Detail" :right="detail.Value"/>
        </div>
    </Fieldset>
    <Fieldset id="annotation" legend="Annotation" :toggleable="true" :collapsed="true" class="p-my-5 p-shadow-4">
        <div>
            Your annotation here
        </div>
    </Fieldset>

</template>

<script>

import Switch from "./Switch";

export default {
    name: "TranslationDetails",
    components: {
        Switch
    },
    props: {
        translation: {
            type: Object,
            required: true
        }
    },
    methods: {
        buzzBoxes: function(elementId){
            const element = document.getElementById(elementId);
            element.classList.add('buzz');
            element.addEventListener('animationend', () => {
                element.classList.remove('buzz');
            });
        }
    },
    watch: {
        translationDetails: function(newValue){
            this.translationData = newValue;
            this.buzzBoxes('simple-translation');
            this.buzzBoxes('translation-details');
            this.buzzBoxes('annotation');

        } 
    },
    data: function(){
        return {
            translationData: this.translation,
            detailsData: [
                {
                    "Detail": "Pos",
                    "Value": "Noun"
                },
                {
                    "Detail": "Gender",
                    "Value": "Masculine"
                },
                {
                    "Detail": "Case",
                    "Value": "Accusative"
                }
            ] // get this per language
        }
    }
}

</script>

<style scoped>

.bg-grey {
    background-color: #e1e1e1;
}

.hvr-overline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}

.hvr-overline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  top: 0;
  background: #ffea71;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.hvr-overline-from-center:hover:before, .hvr-overline-from-center:focus:before, .hvr-overline-from-center:active:before {
  left: 0;
  right: 0;
}

</style>