<template>
    <div class="container">
        <div class="row">
            <div id="reader" class="hvr-overline-from-center pt-4 border rounded">
                <span v-for="word in words" :key="word">
                    <span v-if="word == 'highlighted'">
                        <TranslatedText :original="word" translated="translation"/>
                    </span>
                    <span v-else>
                        {{ word + " " }}
                    </span>
                </span>
            </div>
        </div>
    </div>
    
</template>

<script>

import TranslatedText from "./TranslatedText";

export default {
    name: "Translator",
    components: {
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
        }
    },
    methods: {

    },
    data: function(){
        return {
            words: this.text.split(" "),
            translatedWords: new Map()
        }
    },
    watch: {
        text: function(newValue){
            this.words = newValue.split(" ");
        }
    }
}

</script>

<style scoped>

#reader {
    width: 600px;
    height: 800px;
    /* border: 1px solid;
    border-radius: 4px; */
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