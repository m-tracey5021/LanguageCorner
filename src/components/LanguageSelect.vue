<template>
    
    <div class="dropdown">
        <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown">{{ displayData }}</button>
        <ul class="dropdown-menu scrollable">
            <li v-for="language in languages" :key="language" v-on:click="languageSelected(language)" class="dropdown-item pointer">{{ language.name }}</li>
        </ul>
    </div>
    


</template>

<script>

export default {
    name: 'LanguageSelect',
    props: {
        direction: {
            type: String,
            required: true
        }
    },
    data: function(){
        return {
            directionData: this.direction,
            displayData: "Select " + this.direction,
            languages: [
                { name: 'Arabic', code: 'ar' },
                { name: 'Chinese', code: 'zh' },
                { name: 'Danish', code: 'dk' },
                { name: 'Dutch', code: 'nl' },
                { name: 'English', code: 'en' },
                { name: 'French', code: 'fr' },
                { name: 'German', code: 'de' },
                { name: 'Greek', code: 'el' },
                { name: 'Hebrew', code: 'he' },
                { name: 'Italian', code: 'it' },
                { name: 'Japanese', code: 'ja' },
                { name: 'Korean', code: 'ko' },
                { name: 'Latin', code: 'la' },
                { name: 'Norwegian', code: 'no' },
                { name: 'Polish', code: 'pl' },
                { name: 'Portugese', code: 'pt' },
                { name: 'Brazilian Portugese', code: 'br' },
                { name: 'Russian', code: 'ru' },
                { name: 'Spanish', code: 'es' },
                { name: 'Swedish', code: 'sv' },
                { name: 'Turkish', code: 'tr' },
            ],
            currentSelection: {},
            selectionMade: false
        }
    },
    methods: {
        languageSelected: function(language){
            this.displayData = language.name;
            this.$emit('languageSelected', language, this.directionData);
        }
    }
}

</script>

<style scoped>

.pointer {
    cursor: pointer;
}

.scrollable {
    height: 200px;
    overflow-y: auto;
}

</style>