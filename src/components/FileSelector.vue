<template>

    <!-- <Button id="file-select" label="Select File" class="p-button-outlined" v-on:click="selectFile()"/> -->
    <button type="button" class="btn btn-outline-primary" v-on:click="selectFile()">Select File</button>
</template>

<script>

export default {
    name: 'FileSelector',
    props: {
        instruction: String,
    },
    methods: {
        selectFile: function(){


            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.onchange = e => { 

                // getting a hold of the file reference
                var file = e.target.files[0];

                // setting up the reader
                var reader = new FileReader();
                reader.readAsText(file,'UTF-8');

                // here we tell the reader what to do when it's done reading...
                reader.onload = readerEvent => {
                    var content = readerEvent.target.result; // this is the content!

                    var filename = input.value.substring(input.value.lastIndexOf("\\") + 1);

                    this.$emit('fileSelected', content, filename);
                }
            }

            input.click();

        
            return false;
        }
    }
}

</script>

<style scoped>

    #file-select-label{
        font-family: Verdana, sans-serif;
        font-size: 20px;
    }

</style>