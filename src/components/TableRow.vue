<template>
    
    
    <div>

    </div>  
         
</template>

<script>

export default {
    name: 'TableRow',
    props: {
        cols: {
            type: Array,
            required: true
        },
    },
    data: function(){
        return {
            labelData: this.label,
            childrenData: this.children
        }
    }
}

</script>

<style scoped>

</style>