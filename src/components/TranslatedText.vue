<template>
    <div class="p-mx-1 grow pointer">
        <!-- <div v-if="showTooltipData">
            <span class="mark" v-tooltip="translation">{{ translationDetailsData.original }}</span>
        </div>
        <div v-else>
            <span class="mark" v-on:click="translationSelected()">{{ translationDetailsData.original }}</span>
        </div> -->
        <div>
            <span class="mark" v-on:click="toggle">{{ translationData.search }}</span>
        </div>
        <OverlayPanel ref="op">
            <button>BUTTTTTONNN</button>
        </OverlayPanel>
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
        translation: {
            type: Object,
            required: true
        },
        showTooltip: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        },
        translationSelected: function(){
            this.$emit('translationSelected', this.translationData, false);
        }
    },
    data: function(){
        return {
            translationData: this.translation,
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