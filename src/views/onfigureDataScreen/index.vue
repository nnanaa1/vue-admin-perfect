<template>
  <div class="configureDataScreen">
    <content-charts/>
    <content-configurations/>
  </div>
</template>

<script lang="ts" setup>
import ContentCharts from './ContentCharts/index.vue'
import ContentConfigurations from './ContentConfigurations/index.vue'
</script>

<style lang="scss" scoped>
.configureDataScreen{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
</style>