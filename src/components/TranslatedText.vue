<template>
    <div class="p-mx-1 grow pointer">
        <div v-if="showTooltipData">
            <span class="mark" v-tooltip="translation">{{ translationDetailsData.original }}</span>
        </div>
        <div v-else>
            <span class="mark" v-on:click="translationSelected()">{{ translationDetailsData.original }}</span>
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
        translationDetails: {
            type: Object,
            required: true
        },
        showTooltip: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        translationSelected: function(){
            this.$emit('translationSelected', this.translationDetailsData, false);
        }
    },
    data: function(){
        return {
            translationDetailsData: this.translationDetails,
            showTooltipData: this.showTooltip
        }
    }
}

</script>

<style scoped>

.pointer {
    cursor: pointer;
}

</style>