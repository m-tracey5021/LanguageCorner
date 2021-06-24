<template>
    <div class="container border rounded">
        <div id="header" class="row pt-2">
            <span>Simple Translation</span>
        </div>
        <div id="original" class="row pt-2">
            <span>
                {{ dOriginal }}
            </span>
        </div>
        <div id="arrow" class="row">
            <div class="col-md-12 border rounded bg-secondary w-25">
                <i class="fas fa-arrows-alt-v"></i>
            </div>
        </div>
        <div id="content" class="row pb-2">
            <span>
                {{ dTranslation }}
            </span>
        </div>
    </div>
</template>

<script>

export default {
    name: "TranslationBox",
    props: {
        original: {
            type: String,
            required: true
        },
        translation: {
            type: String,
            required: true
        }
    },
    methods: {

    },
    watch: {
        original: function(newValue){
            // jiggle the box and update the value
            this.dOriginal = newValue;
        },
        translation: function(newValue){
            this.dTranslation = newValue;
        }
    },
    data: function(){
        return {
            dOriginal: this.original,
            dTranslation: this.translation
        }
    }
}

</script>

<style scoped>


</style>