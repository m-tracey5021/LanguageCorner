<template>
    
    <TranslationToolTip :translation="tooltipValue">
        <div class="mark">
            <span>{{ text }}</span>
        </div>
    </TranslationToolTip>  

</template>

<script>

import TranslationToolTip from "./TranslationToolTip";

export default {
    name: "TranslatedText",
    components: {
        TranslationToolTip
    },
    props: {
        original: {
            type: String
        },
        translated: {
            type: String
        }
    },
    data: function(){
        return {
            text: this.original,
            tooltipValue: this.translated
        }
    }
}

</script>

<style scoped>

</style>