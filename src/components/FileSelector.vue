<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <form>
                    <div class="form-group">
                        <button type="button" id="file-select" class="btn btn-secondary" v-on:click="selectFile()">Select file</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
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
                    this.$emit('fileSelected', content);
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