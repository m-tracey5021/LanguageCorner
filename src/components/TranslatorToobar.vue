<template>
    
    <div class="btn-toolbar justify-content-between" role="toolbar">
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-outline-primary" v-on:click="selectFile()">Select File</button>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown">{{ sourceDisplay }}</button>
                <ul class="dropdown-menu scrollable">
                    <li v-for="language in languages" :key="language" v-on:click="languageSelected(language, 'source')" class="dropdown-item pointer">{{ language.name }}</li>
                </ul>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown">{{ targetDisplay }}</button>
                <ul class="dropdown-menu scrollable">
                    <li v-for="language in languages" :key="language" v-on:click="languageSelected(language, 'target')" class="dropdown-item pointer">{{ language.name }}</li>
                </ul>
            </div>
            
            
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-outline-primary" v-on:click="editFile()"><i class="far fa-edit me-2"></i>Edit</button>
            <button type="button" class="btn btn-outline-primary" v-on:click="highlightFile()"><i class="fas fa-exchange-alt me-2"></i>Translate</button>
            <button type="button" class="btn btn-outline-primary" v-on:click="clearFile()"><i class="fas fa-undo me-2"></i>Clear</button>
        </div>
    </div>
    <div v-if="displayEditModal" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit File</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <textarea id="text-editor" class="form-control"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary" v-on:click="clearFile()"><i class="far fa-fa-save"></i>Save</button>
                    <button type="button" class="btn btn-outline-primary" v-on:click="clearFile()"><i class="far fa-window-close"></i>Cancel</button>
                </div>
            </div>
        </div>
    </div>



</template>

<script>

export default {
    name: 'TranslatorToolbar',
    props: {
        
    },
    data: function(){
        return {
            file: "",
            filename: "",
            sourceDisplay: "Select Source",
            targetDisplay: "Select Target",
            languages: [
                { name: 'Arabic', code: 'ar' },
                { name: 'Chinese', code: 'zh' },
                { name: 'Danish', code: 'dk' },
                { name: 'Dutch', code: 'nl' },
                { name: 'English', code: 'en' },
                { name: 'French', code: 'fr' },
                { name: 'German', code: 'de' },
                { name: 'Greek', code: 'el' },
                { name: 'Hebrew', code: 'he' },
                { name: 'Italian', code: 'it' },
                { name: 'Japanese', code: 'ja' },
                { name: 'Korean', code: 'ko' },
                { name: 'Latin', code: 'la' },
                { name: 'Norwegian', code: 'no' },
                { name: 'Polish', code: 'pl' },
                { name: 'Portugese', code: 'pt' },
                { name: 'Brazilian Portugese', code: 'br' },
                { name: 'Russian', code: 'ru' },
                { name: 'Spanish', code: 'es' },
                { name: 'Swedish', code: 'sv' },
                { name: 'Turkish', code: 'tr' },
            ],
            displayEditModal: false
        }
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

                    this.file = content;
                    this.filename = filename;
                    

                    this.$emit('fileSelected', this.file, this.filename);
                }
            }

            input.click();

        
            return false;
        },
        editFile: function(){
            var textEditor = document.getElementById('text-editor');
            textEditor.value = this.file;
            this.displayEditModal = true;
        },
        saveEdit: function(){
            var textEditor = document.getElementById('text-editor');
            this.file = textEditor.value;
            this.displayEditModal = false;
            this.$emit('fileEdited', this.file, this.filename);
        },
        cancelEdit: function(){
            this.displayEditModal = false;
        },
        highlighFile: function(){
            this.$emit('highlighFile');
        },
        clearFile: function(){
            this.$emit('clearFile');
        },
        languageSelected: function(language, languageType){
            if (languageType == 'source'){
                this.sourceDisplay = language.name;
                this.$emit('languageSelected', language, 'source');
            }else{
                this.targetDisplay = language.name;
                this.$emit('languageSelected', language, 'target');
            }
            
        }
    }
}

</script>

<style scoped>

.pointer {
    cursor: pointer;
}

.scrollable {
    height: 200px;
    overflow-y: auto;
}

</style>