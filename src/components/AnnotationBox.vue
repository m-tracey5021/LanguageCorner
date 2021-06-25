<template>
    <div class="card shadow hvr-overline-from-center" style="width: 18rem;">
        <div class="card-header font-weight-bold">
            Annotation
        </div>
        <div class="justify-content-center border rounded mb-2">
            <span>{{ annotationData }}</span>
        </div>
    </div>
</template>

<script>

export default {
    name: "AnnotationBox",
    props: {
        original: {
            type: String,
            required: true
        },
        annotation: {
            type: String,
            required: true
        }
    },
    methods: {

    },
    watch: {
        original: function(newValue){
            // jiggle the box and update the value
            this.originalData = newValue;
        },
        annotation: function(newValue){
            this.annotationData = newValue;
        }
    },
    data: function(){
        return {
            originalData: this.original,
            annotationData: this.annotation
        }
    }
}

</script>

<style scoped>

.bg-grey {
    background-color: #e1e1e1;
}

.hvr-overline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}

.hvr-overline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  top: 0;
  background: #ffea71;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.hvr-overline-from-center:hover:before, .hvr-overline-from-center:focus:before, .hvr-overline-from-center:active:before {
  left: 0;
  right: 0;
}

</style>