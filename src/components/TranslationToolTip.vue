<template>
    <div class="tooltip-box">
        <slot />
        <div class="tooltip">
            <span class="text">{{ translation }}</span>
        </div>
    </div>
</template>

<script>


export default {
    name: 'TranslationToolTip',
    props: {
        translation: {
            type: String,
            required: true
        }
    }
}

</script>

<style scoped>

.tooltip-box { 
  position: relative;
  display: inline-block;
}

.tooltip-box:hover .tooltip{
  opacity: 1;
}

.tooltip { 
  color: #000000;
  text-align: center;
  padding: 5px 0;
  border-radius: 4px;
  border: 1px solid;
  border-color: #ffea71;
  
  width: 120px;
  bottom: 120%;
  left: 50%;
  margin-left: -60px;

  opacity: 0;
  transition: opacity 1s;

  position: absolute;
  z-index: 1;

  background: #fbff91;
}

.text::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #ffea71 transparent transparent transparent;
}

</style>
