<template>
  <router-view/>
  <p>首页</p>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
<div class="box"></div>

</template>

<style lang="less">
.box{
  width: 100px;
  height: 100px;
  background-color: red;
  padding: 10px;
}

</style>
