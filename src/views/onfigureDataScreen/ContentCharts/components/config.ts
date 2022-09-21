import dataJson from './data.json'
export const seriesItem = {
    type: 'bar',
    barWidth: null,
    itemStyle: {
        color: null,
        borderRadius: 0
    }
}

export const option = {
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            show: true,
            type: 'shadow'
        }
    },
    legend: {
        show: true
    },
    xAxis: {
        show: true,
        type: 'category'
    },
    yAxis: {
        show: true,
        type: 'value'
    },
    dataset: { ...dataJson },
    series: [seriesItem, seriesItem]
}