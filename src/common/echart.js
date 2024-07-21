import * as echarts from 'echarts';

export const ecahrtOption = [
    {
    legend: {
        orient: 'vertical',
        right: 10,
        align: 'left',
        top: 'center',
        textStyle: {
            rich: {
                name: {
                    color: '#929292',
                },
                value: {
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: 16, // 根据需要调整字体大小
                },
            },
        },
        data: [
            {
                name: '已签约 {value|80}{name| 个/5800万}',
                textStyle: { rich: { value: {}, name: {} } },
            },
            {
                name: '未签约 {value|18}{name| 个/5800万}',
                textStyle: { rich: { value: {}, name: {} } },
            },
            {
                name: '跟进中 {value|24}{name| 个/5800万}',
                textStyle: { rich: { value: {}, name: {} } },
            },
        ],
        icon: 'circle', // 设置图例图标为圆形
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['22%', '50%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: false,
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 80, name: '已签约 {value|80}{name| 个/5800万}' }, // 已签约
                { value: 18, name: '未签约 {value|18}{name| 个/5800万}' }, // 未签约
                { value: 24, name: '跟进中 {value|24}{name| 个/5800万}' }, // 跟进中
            ],
            itemStyle: {
                borderRadius: 0,
                borderColor: '#fff',
                borderWidth: 0,
            },
        },
    ],
    graphic: [
        {
            type: 'text',
            left: '65%', // 将文本水平居中
            top: '19%', // 根据实际情况调整，确保文本显示在legend上方
            style: {
                // 使用富文本格式
                rich: {
                    a: {
                        // 为“80”设置的样式
                        fontSize: 16, // 放大字体大小
                        fontWeight: 'bold', // 加粗
                        color: '#000', // 字体颜色
                    },
                    b: {
                        // 为“个/5800万”设置的样式
                        fontSize: 14, // 字体大小
                        color: '#929292',
                    },
                },
                text: '项目总数 {a|80} {b|个/5800万}', // 显示的文本内容，使用上面定义的样式标签
                textAlign: 'center',
                fill: '#000', // 默认文本颜色，这里可能不会生效因为已经在rich中指定了颜色
            },
        },
        {
            type: 'text',
            left: '18%',
            top: '40%',
            style: {
                text: '72%',
                textAlign: 'center',
                fill: '#000',
                fontSize: 20,
            },
        },
        {
            type: 'text',
            left: '18%',
            top: '55%',
            z: 100,
            style: {
                text: '转化率',
                textAlign: 'center',
                fill: '#000',
                fontSize: 14,
            },
        },
    ],
}, {
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '3%', // 调整左边距
        right: '3%', // 调整右边距
        bottom: '3%', // 调整底部边距
        top: '5%', // 调整顶部边距
        containLabel: true, // 确保标签和轴标题被包含在容器内
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'], // 示例数据
        axisLine: {
            show: false, // 不显示横坐标轴线
        },
        axisTick: {
            show: false, // 不显示刻度线
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}',
        },
    },
    series: [
        {
            name: '销售额',
            type: 'line',
            data: [620, 1032, 701, 1234, 890, 1430, 1120], // 示例数据，模拟起伏更大
            smooth: true, // 折线平滑
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#62c1fe' },
                    { offset: 0.5, color: '#ad90f7' },
                    { offset: 1, color: '#e875f2' },
                ]),
            },
            // symbolSize: (value, params) => {
            //     // 获取数据系列的长度
            //     const seriesLength = option.series[0].data.length;
            //     // 中间节点放大
            //     if (params.dataIndex === Math.floor(seriesLength / 2)) {
            //         return 8; // 中间节点的大小
            //     }
            //     return 8; // 其他节点的大小
            // },
        },
    ],
}, {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '0%', // 调整左边距
        right: '5%', // 调整右边距
        bottom: '3%', // 调整底部边距
        top: '5%', // 调整顶部边距
        containLabel: true, // 确保标签和轴标题被包含在容器内
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine: {
            show: false, // 不显示横坐标轴线
        },
        axisTick: {
            show: false, // 不显示刻度线
        },
        splitLine: {
            show: false, // 不显示x轴网格线
        },
    },
    yAxis: {
        type: 'category',
        data: ['刘晓彬', '萧秀凝', '曲严琰'], // 示例数据
        axisLine: {
            show: false, // 不显示横坐标轴线
        },
        axisTick: {
            show: false, // 不显示刻度线
        },
        splitLine: {
            show: false, // 不显示y轴网格线
        },
        axisLabel: {
            rich: {
                iconStyle: {
                    fontSize: 20, // 设置图标的字体大小为20
                },
                nameStyle: {
                    // 定义名字的样式
                    fontSize: 12, // 设置名字的字体大小为12，或者您希望的任何大小
                },
            },
            formatter: function (value, index) {
                // 根据index或value来决定显示哪个排名的图标
                const rankIcons = {
                    2: '{iconStyle|🥇}',
                    1: '{iconStyle|🥈}',
                    0: '{iconStyle|🥉}',
                };
                return `${rankIcons[index]} {nameStyle|${value}}`;
            },
        },
    },
    series: [
        {
            name: '销售额',
            type: 'bar',
            data: [920, 1032, 1201], // 示例数据
            barWidth: '30%', // 调整柱子宽度
            itemStyle: {
                borderRadius: [0, 5, 5, 0], // 只有右侧圆角
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    // 设置渐变色，方向也要调整为横向
                    { offset: 0, color: '#bdd1f6' },
                    { offset: 1, color: '#4282ff' },
                ]),
            },
            label: {
                show: true, // 显示标签
                position: 'right', // 标签位置在顶部
                formatter: '{c}万', // 自定义显示的内容，{c}是指当前数据点的值
            },
        },
    ],
},{
    legend: {
      data: ['计划', '实际'],
      icon: 'circle', // 设置图例图标为圆形
      left: 'left', // 将图例定位到左侧
      top: 'top', // 将图例定位到顶部
    },
    grid: {
      top: '45', // 距离容器上边界的距离
      right: '10', // 距离容器右边界的距离
      bottom: '3', // 距离容器下边界的距离
      left: '10', // 距离容器左边界的距离
      containLabel: true, // 包含标签的绘图区域
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        show: false, // 不显示横坐标轴线
      },
      axisTick: {
        show: false, // 不显示刻度线
      },
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    series: [
      {
        name: '实际',
        data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 234, 123],
        type: 'bar',
        stack: 'total', // 添加堆积效果
        barWidth: '30%', // 调整柱子宽度
        itemStyle: {
          borderRadius: [5, 5, 0, 0], // 只有顶部圆角
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            // 设置渐变色
            { offset: 0, color: '#bdd1f6' },
            { offset: 1, color: '#4282ff' },
          ]),
        },
      },
      {
        name: '计划',
        data: [320, 132, 101, 134, 90, 230, 210, 320, 132, 101, 134, 90],
        type: 'bar',
        stack: 'total', // 添加堆积效果
        barWidth: '30%', // 调整柱子宽度
        itemStyle: {
          borderRadius: [5, 5, 0, 0], // 只有顶部圆角
          color: '#ebf2ff', // 设置柱子颜色
        },
      },
    ],
  }]

