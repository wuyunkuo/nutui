<template>
  <div class="demo" id="elId">
    <h2>基本用法</h2>
    <div class="text-data">我是测试数据1</div>
    <div class="text-data">我是测试数据2</div>
    <div class="text-data">我是测试数据3</div>
    <div class="text-data">我是测试数据4</div>
    <div class="text-data">我是测试数据5</div>
    <div class="text-data">我是测试数据6</div>
    <div class="text-data">我是测试数据7</div>
    <div class="text-data">我是测试数据8</div>
    <div class="text-data">我是测试数据9</div>
    <div class="text-data">我是测试数据10</div>
    <div class="text-data">我是测试数据11</div>
    <div class="text-data">我是测试数据12</div>
    <div class="text-data">我是测试数据13</div>
    <div class="text-data">我是测试数据14</div>
    <div class="text-data">我是测试数据15</div>
    <div class="text-data">我是测试数据16</div>
    <div class="text-data">我是测试数据17</div>
    <div class="text-data">我是测试数据18</div>
    <div class="text-data">我是测试数据19</div>
    <div class="text-data">我是测试数据20</div>
    <div class="text-data">我是测试数据21</div>
    <div class="text-data">我是测试数据22</div>
    <div class="text-data">我是测试数据23</div>
    <div class="text-data">我是测试数据24</div>
    <nut-backtop @click="handleClick" el-id="elId" :distance="100" :bottom="90">
      <view class="backtop-demo"
        ><nut-icon size="12px" class="nut-backtop-main" name="top"></nut-icon><view class="title">顶部</view></view
      >
    </nut-backtop>
    <nut-backtop @click="handleClick" el-id="elId" :distance="200"></nut-backtop>
  </div>
</template>

<script>
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('backtop');

export default createDemo({
  setup(props, { emit }) {
    const handleClick = () => {
      console.log('触发返回顶部');
    };

    return {
      handleClick
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  .text-data {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 20px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    height: 46px;
    background: rgba(255, 255, 255, 1);
    border-radius: 7px;
    box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    line-height: 19px;
    font-size: 13px;
    color: rgba(102, 102, 102, 1);
  }
  .backtop-demo {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 12px;
    }
  }
}
</style>
