<template>
    <button type="button" v-on:click="collapse">Collapse</button>
    <div id="collapse" class="collapsible">
        <!-- <div id="content">
            <span>Content</span>
            <span>Content</span>
            <span>Content</span>
            <span>Content</span>
            <span>Content</span>
        </div> -->
        <slot name="content"></slot>

    </div>
    
    

</template>

<script>

export default {
    name: 'Collapse',
    components: {
    
    },
    props: {
        // slotHeight: {
        //     type: Number,
        //     required: true
        // }
    },
    data: function(){
        return {
            // contentHeight: slotHeight + 5
        }
    },
    methods: {
        collapse: function(){
            debugger;
            const slots = this.$slots.default;
            console.log(slots);
            var collapse = document.getElementById('collapse');
            if (collapse.clientHeight){
                collapse.style.height = 0;
            }else{
                // var content = document.getElementById('content');
                // var expandedHeight = content.clientHeight + 5;
                // collapse.style.height = expandedHeight + 'px';
                // collapse.style.height = contentHeight + 'px';
            }
        }
    }
}

</script>

<style scoped>


.collapsible {
    -moz-transition: height .25s;
    -webkit-transition: height .25s;
    transition: height .25s;
    height: 0;
    overflow: hidden;
}

</style>