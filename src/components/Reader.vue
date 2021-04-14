<template>
    <FileSelector instruction="Please select a file"/>
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
        test: String,
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