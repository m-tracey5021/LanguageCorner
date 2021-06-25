<template>



    <!-- <el-collapse>
        <el-collapse-item title="Translation" name="1" class="justify-content-center">
            <div>   
                {{ "Original: " + originalData }}
            </div>
            <div>
                <i class="el-icon-bottom"></i>
            </div>
            <div>
                {{ "Translation: " + translationData }}
            </div>
        </el-collapse-item>

        <el-collapse-item title="Details" name="2">
            <el-table 
        </el-collapse-item>

        <el-collapse-item title="Annotation" name="3">

        </el-collapse-item>
    </el-collapse> -->




    <div class="card shadow hvr-overline-from-center" style="width: 18rem;">
        <div class="card-header font-weight-bold">
            Translation Details
        </div>
        <div class="justify-content-center border rounded mb-2">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ "Original: " + originalData }}</li>
                <li class="list-group-item">{{ "Part of Speech: " + posData}}</li>
                <li class="list-group-item">{{ "Gender: " + genderData }}</li>
                <li class="list-group-item">{{ "Case: " + caseData }}</li>
                <ul class="list-group">
                    <li v-for="con in conjugationData" :key="con" class="list-group-item">
                        {{ "Conjugation: " + con }}
                    </li>
                </ul>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: "DetailsBox",
    props: {
        original: {
            type: String,
            required: true
        },
        translation: {
            type: String,
            required: true
        },
        pos: {
            type: String,
            required: true
        },
        gender: {
            type: String
        },
        case: {
            type: String
        },
        // conjugations: {
        //     type: Array
        // }
    },
    methods: {

    },
    watch: {
        original: function(newValue){
            // jiggle the box and update the value
            this.originalData = newValue;
        }
    },
    data: function(){
        return {
            originalData: this.original,
            translationData: this.translation,
            posData: this.pos,
            genderData: this.gender,
            caseData: this.case,
            // conjugationData: this.conjugations
            conjugationData: ["hi", "gday", "whatsup"]
        }
    }
}

</script>

<style scoped>

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