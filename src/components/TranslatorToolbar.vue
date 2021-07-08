<template>

    <Toolbar>
        <template #left>
            <Button id="file-select" label="Select File" class="p-button-outlined" v-on:click="selectFile()"/>
            <Dropdown v-model="sourceLanguage" :options="languages" optionLabel="name" optionValue="code" placeholder="Select Source"/>
            <Dropdown v-model="targetLanguage" :options="languages" optionLabel="name" optionValue="code" placeholder="Select Target"/>
        </template>
        <template #right>
            <span class="p-buttonset">
                <Button label="Edit" icon="far fa-edit" v-on:click="editFile()"/>
                <Button label="Translate" icon="fas fa-exchange-alt"/>
                <Button label="Clear" icon="fas fa-undo" v-on:click="clearFile()"/>   
            </span>
        </template>
    </Toolbar>

</template>

<script>

export default {
    name: "TranslatorToolbar",
    components: {

    },
    props: {

    },
    methods: {
        
    },
    watch: {

        } 
    },
    data: function(){
        return {

        }
    }
}

</script>

<style scoped>


</style>