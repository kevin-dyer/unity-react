import React from "react";
import echarts from 'echarts'
import {debounce} from 'throttle-debounce'
import moment from 'moment'
/**
 * A readOnly collapsible json tree viewer based on UnityCodeEditor
 * @example
 * <UnityHistogram/>
 */

export interface UnityHistogramProps extends React.HTMLAttributes<HTMLElement> {
  data?: histData[]
  children?: any
  style?: any
}

export interface histData {
  timestamp: string
  value: number
}

export interface formatParam {
  value?: any
}

function formatSeriesData(data: histData[]) {
  return data.map(({timestamp, value}) => ({
    name: moment(timestamp).fromNow(),
    value: [timestamp, value]
  }))
}

const formatTooltip = (params: any) => {
    return `${moment(params['value'][0]).fromNow()}: ${params['value'][1] * 100}% cpu`
  }

const createChartOptions = (data: histData[]): echarts.EChartOption => ({
  title: {
    text: 'hist'
  },
  grid:{
    containLabel:false
  },
  tooltip: {
    transitionDuration: 0.2,
    formatter: formatTooltip,
  },
  xAxis: {
    show:true,
    type: 'time',
    splitLine: {
        show: false
    }
  },
  yAxis: {
    show: false,
    type: 'value'
  },
  series: [{
    name: 'bar',
    type: 'bar',
    data: formatSeriesData(data),
    animationDelay: function (idx: number) {
      return idx;
    }
  }],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function (idx: number) {
    return idx * 5;
  }
})

export default class UnityHistogram extends React.Component<UnityHistogramProps> {
  private histRef = React.createRef<HTMLDivElement>()
  private resizeObserver?: ResizeObserver
  private chart?: echarts.ECharts

  componentDidMount() {
    const {data=[]} = this.props
    //NOTE: using ! to remove null/undefined from the type definition
    this.chart = echarts.init(this.histRef.current!)

    // var xAxisData = [];
    // var data1 = [];
    // for (var i = 0; i < 100; i++) {
    //   xAxisData.push(i);
    //   data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    // }

    // const xAxisData = data.map(({timestamp}) => timestamp)
    // const seriesData = data.map(({value}) => value)
    // const seriesData = data.map(({timestamp, value}) => ({
    //   name: moment(timestamp).fromNow(),
    //   value: [timestamp, value]
    // }))

    const options = createChartOptions(data)
    console.log({options})
    this.chart.setOption(options)

    this.resizeObserver = new ResizeObserver(this.resizeChart);

    this.resizeObserver?.observe(this.histRef.current!);
  }

  componentDidUpdate(prevProps: UnityHistogramProps) {
    const {data=[]} = this.props
    if (prevProps?.data !== data && !!this.chart) {
      // console.log("updating hist data! formatSeriesData(data): ", formatSeriesData(data))
      // 
      const newOptions = createChartOptions(data)
      this.chart.setOption(newOptions)
    }
  }

  componentWillUnmount() {
    this.resizeObserver?.unobserve(this.histRef.current!);
    this.resizeChart.cancel()
  }

  resizeChart = debounce(500, false, () => {
    this.chart?.resize()
  })

  render() {
    return <div
      style={styles.container}
      ref={this.histRef}
    >
    </div>
  }
}

const styles = {
  container: {
    // height: '300px',
    minWidth: 0,
    backgroundColor: 'pink',
    flex: '1 1 auto'
  }
}