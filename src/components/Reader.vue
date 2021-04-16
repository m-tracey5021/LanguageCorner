<template>
    <FileSelector instruction="Please select a file" @fileSelected="updateTextReader"/>
    <div id="readerrow" class="row">
        <textarea id="reader" class="form-control"></textarea>
    </div>
</template>

<script>

import FileSelector from './FileSelector'

export default {
    name: 'Reader',
    components: {
        FileSelector
    },
    props: {
        text: String,
    },
    methods: {
        updateTextReader: function(content){
            document.getElementById('reader').value = content;
        }
    },
}

</script>

<style scoped>

    #readerrow {
        height: 100%;
    }

    textarea {
        width: 100%;
        height: 180%;
    }

</style>