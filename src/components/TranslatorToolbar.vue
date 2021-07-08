<template>

    <Toolbar>
        <template #left>
            <div class="p-d-flex p-jc-evenly">
                <div class="p-mx-1">
                    <Button id="file-select" label="Select File" class="p-button-outlined" v-on:click="selectFile()"/>
                </div>
                <div class="p-mx-1">
                    <Dropdown v-model="sourceLanguage" v-on:change="$emit('sourceUpdated', sourceLanguage)" :options="languages" optionLabel="name" optionValue="code" placeholder="Select Source"/>
                </div>
                <div class="p-mx-1">
                    <Dropdown v-model="targetLanguage" v-on:change="$emit('targetUpdated', targetLanguage)" :options="languages" optionLabel="name" optionValue="code" placeholder="Select Target"/>
                </div>
                
                
                
            </div>
        </template>
        <template #right>
            <span class="p-buttonset">
                <Button label="Edit" icon="far fa-edit" v-on:click="editFile()"/>
                <Button label="Translate" icon="fas fa-exchange-alt"/>
                <Button label="Clear" icon="fas fa-undo" v-on:click="clearFile()"/>   
            </span>
        </template>
    </Toolbar>

    <Dialog v-model:visible="displayEditModal" :modal="true">
        <template #header>
            <div class="p-d-flex p-jc-start p-mt-3">
                <h3>Edit File</h3>
            </div>
            
        </template>
        <Textarea v-model="edit" rows="10" cols="30" />
        <template #footer>
            <Button label="Save" icon="far fa-save" class="p-button-outlined" v-on:click="saveEdit()"/>
            <Button label="Cancel" icon="far fa-window-close" class="p-button-outlined" v-on:click="cancelEdit()"/>
        </template>
    </Dialog>

</template>

<script>

export default {
    name: 'TranslatorToolbar',
    components: {

    },
    props: {

    },
    data: function(){
        return {
            file: '',
            filename: '',
            edit: '',
            sourceLanguage : '',
            targetLanguage: '',
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

                    this.$emit('fileUpdated', this.file, this.filename);
                }
            }

            input.click();

            return false;
        },
        editFile: function(){
            this.edit = this.file;
            this.displayEditModal = true;
        },
        saveEdit: function(){
            this.file = this.edit;
            this.displayEditModal = false;
            this.$emit('fileUpdated', this.file, this.filename);
        },
        cancelEdit :function(){
            this.displayEditModal = false;
        },
        highlighFile: function(){
            // this.$emit('highlighFile');
        },
        clearFile: function(){
            this.file = '';
            this.filename = '';
            this.$emit('fileUpdated', this.file, this.filename);
            this.edit = '';
        },
    },
    emit: ['fileUpdated', 'sourceUpdated', 'targetUpdated']
}

</script>

<style scoped>


</style>