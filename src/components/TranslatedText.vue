<template>
    <div class="pop-text">
        <div v-if="showTooltipData">
            <span class="mark" v-tooltip="translation">{{ originalData }}</span>
        </div>
        <div v-else>
            <span class="mark" v-on:click="updateTranslationBoxes()">{{ originalData }}</span>
        </div>
    </div>
    

    <!-- <ToolTip :text="translationData">
        <div class="mark">
            <span>{{ originalData }}</span>
        </div>
    </ToolTip>   -->

</template>

<script>

// import ToolTip from "./ToolTip";

export default {
    name: "TranslatedText",
    components: {
        // ToolTip
    },
    props: {
        original: {
            type: String
        },
        translated: {
            type: String
        },
        showTooltip: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        updateTranslationBoxes: function(){

        }
    },
    data: function(){
        return {
            originalData: this.original,
            translationData: this.translated,
            showTooltipData: this.showTooltip
        }
    }
}

</script>

<style scoped>

.pop-text:hover {
    box-shadow: 5px 10px 18px #888888
}

</style>