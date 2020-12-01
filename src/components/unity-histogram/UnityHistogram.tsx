import React, {HTMLAttributes, createRef, Component} from "react";
import echarts from 'echarts'
import {debounce} from 'throttle-debounce'
import moment from 'moment'
/**
 * A Histogram chart based on ECharts. Responds to parent container resize as well as new data.
 * @param {function} tooltipFormatter - function to format the tooltip text. The first parameter params is the data that the formatter needs. See ECharts tooltip formatter callback function: https://echarts.apache.org/en/option.html#tooltip.formatter
 * @param {object[]} data - array of timeseries data, each with a timestamp and value. Assuming timestamps are unique.
 * @param {string} barColor - color value of bar segments. Defaults to light blue.
 * @example
 * <UnityHistogram/>
 */

export interface UnityHistogramProps extends HTMLAttributes<HTMLElement> {
  data?: histData[]
  barColor?: string,
  tooltipFormatter?: echarts.EChartOption.Tooltip.Formatter
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
    name: timestamp,
    timestamp,
    value: [timestamp, value]
  }))
}

const formatTooltip = (params: any) => {
    return `${moment(params['value'][0]).fromNow()}: ${params['value'][1]}`
  }

export default class UnityHistogram extends Component<UnityHistogramProps> {
  private histRef = createRef<HTMLDivElement>()
  private resizeObserver?: ResizeObserver
  private chart?: echarts.ECharts

  componentDidMount() {
    //NOTE: using ! to remove null/undefined from the type definition
    this.chart = echarts.init(this.histRef.current!)
    const options = this.createChartOptions()
    this.chart.setOption(options)

    this.resizeObserver = new ResizeObserver(this.resizeChart);

    this.resizeObserver?.observe(this.histRef.current!);
  }

  componentDidUpdate(prevProps: UnityHistogramProps) {
    const {data=[]} = this.props

    if (prevProps?.data !== data && !!this.chart) {
      const newOptions = this.createChartOptions()

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

  createChartOptions = (): echarts.EChartOption => {
    const {
      data=[],
      barColor='#92b4dd',
      tooltipFormatter=formatTooltip
    } = this.props

    return {
      title: {
        text: 'hist'
      },
      grid:{
        containLabel:false
      },
      tooltip: {
        transitionDuration: 0.2,
        formatter: tooltipFormatter,
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
      }],
      animation: true,
      color: barColor ? [barColor] : undefined,
      animationDuration: 200
    }
  }

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
    minWidth: 0,
    flex: '1 1 auto'
  }
}