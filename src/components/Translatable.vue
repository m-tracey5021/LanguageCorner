<template>
    <div id="translatable" v-on:click="translate()">
        <span>{{ originalData }}</span>
    </div>
</template>

<script>

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
            console.log("Translating...");
            
            var base64 = require('base-64');

            var apiEndpoint = 'https://dictapi.lexicala.com/search-entries?source=global&language=' + this.language + '&text=';
            var username = 'm.tracey5021@gmail.com';
            var password = 'y_W0rd53cUr!t';

            var headers = new Headers();

            headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));

            // this.originalWordData = newValue.split(" ");

            var url = apiEndpoint + this.originalData;
            debugger;
            fetch(url, {method:'GET',
                headers: headers,
            })
            .then(function (response){ // converts response to obj, passed to next .then
                return response.json();
            })
            .then(function (obj){
                console.log(obj);
                var translations = obj.results[0].senses[0].translations;
                console.log(translations);
                var englishTranslations = translations.en;
                console.log(englishTranslations);
                var english;
                if (Array.isArray(englishTranslations)){
                    english = englishTranslations[0].text;
                }else{
                    english = englishTranslations.text;
                }
                this.translationData = english;
            })
            .catch(function (error){
                console.log('Unexpected error: ' + error);
            });

            var translationDetails = {
                "original": this.originalData,
                "translation": this.translationData
            };

            this.$emit('translated', translationDetails);

            
            
        }
    },
    data: function(){
        return {
            languageData: this.language,
            originalData: this.original,
            translationData: "" 
        }
    }
}

</script>

<style scoped>

</style>