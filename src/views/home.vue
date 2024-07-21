<template>
  <d-main>
    <template #title>
      屏幕1
    </template>
    <template #content>
      <div class="">
        <ElDropdown type="primary" split-button >
          <span>{{ inpArr[selectValue].label }}</span> 
          <template #dropdown>
            <el-dropdown-menu >
              <el-dropdown-item v-for="item in inpArr" @click="selectValue=item.value" :key="item.label">{{ item.label }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </ElDropdown>
      </div>
      <div class="echarts-box">
       <div ref="chartDom" style="width: 700px; height: 400px;"></div>
      </div>
    </template>
  </d-main>
</template>

<script setup>
import { ref,watch,onMounted,nextTick,onUnmounted} from 'vue';
import * as echarts from 'echarts';
import {ElDropdown,ElDropdownMenu,ElDropdownItem} from "element-plus"
import {ecahrtOption} from "../common/echart"


// 创建一个响应式引用来保存DOM元素
const chartDom = ref(null);
let chartInstance = null;
const selectValue= ref(0)
const inpArr = [{
  value:0,
  label:"环形图"
},{
  value:1,
  label:"折线图"
},{
  value:2,
  label:"横向柱状"
}]

watch(selectValue,(aft,ber)=>{
  drawPro(ecahrtOption[aft])
})


onMounted(()=>{
 drawPro(ecahrtOption[selectValue.value])
})
// 绘制饼图环形
const drawPro =async (option) => {
  closeEChart();
  await nextTick(); // 确保DOM已经渲染完成
  chartInstance = echarts.init(chartDom.value);
  chartInstance.setOption(option);
};

const closeEChart = ()=>{
  if (chartInstance != null && chartInstance.dispose) {
    chartInstance.dispose();
  }
}

// 销毁ECharts实例
onUnmounted(() => {
  closeEChart()
});
</script>


<style lang="scss">
.echarts-box{
  display: flex;
  justify-content: center;
}

.example-showcase .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
</style>
