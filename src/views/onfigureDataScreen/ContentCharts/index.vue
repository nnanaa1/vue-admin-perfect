<template>
  <div class="ContentCharts">
    <div class="item-box">
      <img src="../img/line_linear_single.png" alt="">
    </div>
    <div style="text-align: center"> 拖拽待完善 ...</div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.ContentCharts{
  width: 200px;
  border-right: 1px solid red;
  height: 100%;
  .item-box{
    margin: 0 7%;
    margin-bottom: 15px;
    width: 86%;
    overflow: hidden;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0);
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>