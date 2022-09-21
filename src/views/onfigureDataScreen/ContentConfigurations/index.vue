<template>
  <div class="ContentConfigurations">
    <SketchRule
        class="style-ruler"
        :thick="options.thick"
        :scale="options.scale"
        :width="582"
        :height="482"
        :startX="options.startX"
        :startY="options.startY"
        :shadow="options.shadow"
        :lines="options.lines"
    />
    <div class="content-box"
         @drop="dragHandle"
         @dragover="dragoverHandle"
         @dragenter="dragoverHandle">

    </div>
  </div>
</template>

<script lang="ts" setup>
import { SketchRule } from 'vue3-sketch-ruler'
import 'vue3-sketch-ruler/lib/style.css'
import UCharts from './charts'
const rectWidth = 160;
const rectHeight = 200;

const options = {
  scale: 2, //658813476562495, //1,
  startX: 0,
  startY: 0,
  lines: {
    h: [100, 200],
    v: [100, 200]
  },
  thick: 20,
  isShowRuler: true,
  isShowReferLine: true
}

const dragHandle = (e)=>{
  e.preventDefault()
  // 获取拖拽数据
  const drayDataString = e!.dataTransfer!.getData('ChartData')
  console.log('==2=1',e!.dataTransfer)
  let str = {
    "key":"BarCommon",
    "chartKey":"VBarCommon",
    "conKey":"VCBarCommon",
    "title":"柱状图",
    "category":"Bars",
    "categoryName":"柱状图",
    "package":"Charts",
    "chartFrame":"echarts"
  }
  console.log('UCharts',UCharts)
}

const dragoverHandle = (e)=>{
  e.preventDefault()
  e.stopPropagation()
  if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy'
}

</script>

<style lang="scss" scoped>
.ContentConfigurations{
  position: relative;
  flex: 1;
  //background-color: #18181c;
  .style-ruler{
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 12px;
    pointer-events: none;
  }
  .content-box{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #18181c;
    overflow: hidden;
  }
}
</style>