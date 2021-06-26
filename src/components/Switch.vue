<template>
    <Splitter class="p-my-3">
        <SplitterPanel class="p-my-2">
            <span>{{ leftData }}</span>
        </SplitterPanel>
        <SplitterPanel class="p-my-2">
            <span>{{ rightData }}</span>
        </SplitterPanel>
    </Splitter>
    
    
    
</template>

<script>

export default {
    name: "Switch",
    props: {
        left: {
            type: String,
            required: true
        },
        right: {
            type: String,
            required: true
        }
    },
    data: function(){
        return {
            leftData: this.left,
            rightData: this.right
        }
    },
    watch: {
        left: function(newValue){
            this.leftData = newValue;
        },
        right: function(newValue){
            this.rightData = newValue;
        }
    }
}

</script>

<style scoped>

</style>