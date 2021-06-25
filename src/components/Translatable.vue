<template>
    <div id="translatable" class="mark" v-on:click="translate()">
        <span>{{ wordData }}</span>
    </div>
</template>

<script>

export default {
    name: "Translatable",
    props: {
        word: {
            type: String,
            required: true
        },
        language: {
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
            
        }
    },
    data: function(){
        return {
            wordData: this.word,
            languageData: this.language
        }
    }
}

</script>

<style scoped>

</style>