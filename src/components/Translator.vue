<template>


    <Panel header="Reader" class="p-shadow-5">
        <template #icons>
            <button class="p-panel-header-icon p-link p-mr-2" v-on:click="settings()">
                <span class="pi pi-cog"></span>
            </button>
        </template>
        <span v-for="word in originalWordData" :key="word">
            <span v-if="word == 'highlighted'">

                <Translatable :word="word" :language="language"/>
            </span>
            <span v-else>
                {{ word + " " }}
            </span>
        </span>
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
// import TranslatedText from "./TranslatedText";

export default {
    name: "Translator",
    components: {
        Translatable
        // TranslatedText
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

        }
    },
    data: function(){
        return {
            checked: true,
            originalWordData: this.text.split(" "),
            translatedWordData: []
        }
    },
    watch: {
        text: function(newValue){

            console.log("Translating...");
            
            var base64 = require('base-64');

            var apiEndpoint = 'https://dictapi.lexicala.com/search-entries?source=global&language=' + this.language + '&text=';
            var username = 'm.tracey5021@gmail.com';
            var password = 'y_W0rd53cUr!t';

            var headers = new Headers();

            headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));

            this.originalWordData = newValue.split(" ");

            for (var i = 0; i < this.originalWordData.length; i ++){
                var toTranslate = this.trim(this.originalWordData[i]);
                // var translated = "";
                var url = apiEndpoint + toTranslate;
                debugger;
                fetch(url, {method:'GET',
                    headers: headers,
                })
                .then(function (response){ // converts response to obj, passed to next .then
                    return response.json();
                })
                .then(function (obj){
                    console.log(obj);
                    console.log(obj.results);
                })
                .catch(function (error){
                    console.log('Unexpected error: ' + error);
                });
                // .then(response => response.json())
                // .then(json => {
                    
                //     var translations = json.results[0].senses[0].translations;
                //     console.log(json);
                //     console.log(translations);
                // });
            }
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