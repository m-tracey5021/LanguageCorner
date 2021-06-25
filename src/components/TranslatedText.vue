<template>
    
    <ToolTip :text="tooltipValue">
        <div class="mark">
            <span>{{ text }}</span>
        </div>
    </ToolTip>  

</template>

<script>

import ToolTip from "./ToolTip";

export default {
    name: "TranslatedText",
    components: {
        ToolTip
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

/* .front {
    z-index: 10;
} */

</style>