import { Component, OnDestroy, OnInit } from '@angular/core';
import * as echarts from 'echarts';

interface DataItem {
  name: string;
  value: [string, number];
}
@Component({
  selector: 'app-echart-demo',
  templateUrl: './echart-demo.component.html',
  styleUrls: ['./echart-demo.component.scss'],
})
export class EchartDemoComponent implements OnInit, OnDestroy {
  title = 'vv exercise';

  data: DataItem[] = [];
  data1: DataItem[] = [];
  now = new Date(1997, 9, 3);
  oneDay = 24 * 3600 * 1000;
  value = Math.random() * 1800;
  value1 = Math.random() * 500;
  option: echarts.EChartsOption | null = {};
  myChart!: echarts.ECharts;
  timer: any;

  randomData(): DataItem {
    this.now = new Date(+this.now + this.oneDay);
    this.value = this.value + Math.random() * 50 - 25;
    return {
      name: this.now.toString(),
      value: [
        [
          this.now.getFullYear(),
          this.now.getMonth() + 1,
          this.now.getDate(),
        ].join('/'),
        Math.round(this.value),
      ],
    };
  }
  randomData1(): DataItem {
    this.now = new Date(+this.now + this.oneDay);
    this.value1 = this.value1 + Math.random() * 21 - 10;
    return {
      name: this.now.toString(),
      value: [
        [
          this.now.getFullYear(),
          this.now.getMonth() + 1,
          this.now.getDate(),
        ].join('/'),
        Math.round(this.value1),
      ],
    };
  }

  render() {
    this.option = {
      // 控制显示top series中的name
      legend: {
        data: ['人数1', '人数2']
      },
      // 下载该exharts的逻辑写这 
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      // 全局调色盘
      color: [
        '#37A2DA',
        '#32C5E9',
        '#67E0E3',
        '#9FE6B8',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293',
        '#E062AE',
        '#E690D1',
        '#e7bcf3',
        '#9d96f5',
        '#8378EA',
        '#96BFFF',
      ],
      title: {
        text: 'Dynamic Data & Time Axis',
      },
      // 普通样式。与高亮二选一
      itemStyle: {
        // 点的颜色。
        color: 'pink',
      },
      label: {
        show: true,
        // 标签的文字。
        formatter: 'This is a normal label.',
      },
      // 高亮样式。
      emphasis: {
        itemStyle: {
          // 高亮时点的颜色。
          color: 'red',
        },
        label: {
          show: true,
          // 高亮时标签的文字。
          formatter: 'This is a emphasis label.',
        },
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          params = params[0];
          var date = new Date(params.name);
          return (
            date.getDate() +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear() +
            ' : ' +
            params.value[1]
          );
        },
        axisPointer: {
          animation: false,
        },
      },
      xAxis: {
        type: 'time',
        name:"时间",
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        name: '人数',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: '人数1',
          type: 'line',
          showSymbol: false,
          data: this.data,
        },
        {
          name: '人数2',
          type: 'line',
          showSymbol: false,
          data: this.data1,
        },
      ],
    };
  }
  ngOnInit(): void {
    document.getElementById('main')?.removeAttribute('_echarts_instance_');
    for (let i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
      this.data1.push(this.randomData1());
    }
    this.render();
    this.myChart = echarts.init(document.getElementById('main'));

    this.timer = setInterval(() => {
      for (var i = 0; i < 5; i++) {
        this.data.shift();
        this.data.push(this.randomData());
        this.data1.shift();
        this.data1.push(this.randomData1());
      }
      this.myChart.setOption<echarts.EChartsOption>({
        series: [
          {
            data: this.data,
          },
          {
            data: this.data1,
          },
        ],
      });
    }, 1000);

    //   console.log(myChart);

    this.option && this.myChart.setOption(this.option);
  }

  ngOnDestroy(): void {
    this.myChart.dispose();
    clearInterval(this.timer);
  }
}
