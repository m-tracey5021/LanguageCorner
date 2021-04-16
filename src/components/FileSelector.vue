<template>
    <div class="container">
        <div class="row mt-4 mb-4">
            <div class="col-md-12">
                <form>
                    <div class="form-group">
                        <button type="button" id="file-select" class="btn btn-outline-dark" v-on:click="selectFile()">Select file</button>
                        <!-- <label for="file-select" id="file-select-label" class="float-start mb-4">{{instruction}}</label> -->
                        <!-- <input type="file" id="file-select" class="form-control-file p-1 float-start border"> -->
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
                    // console.log(content);
                    debugger;
                    // this.$emit('fileSelected', {fileContent: content});
                    this.$emit('fileSelected', content);
                    return content;
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