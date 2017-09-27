import moment from 'moment';

import baseConfig from '../highcharts-config-base';

const chartConfig = Object.assign({}, baseConfig, {
    chart: {
        type: 'column'
    },
    xAxis: {
        type: 'category'
    },
    plotOptions: {
        series: {
            color: '#48cfad',
            borderWidth: 0,
            dataLabels: {
                enabled: false,
            }
        }
    },
    tooltip: {
        formatter: function() {
            return `${this.point.name}<br /><span style="color: ${this.series.color}">${this.series.name}: ${this.y}</span>`;
        }
    },
    series: [{
        name: 'Height',
        data: [{
            name: '22-Jan',
            y: 164,
        }, {
            name: '6-Feb',
            y: 163,
        }, {
            name: '25-Feb',
            y: 162,
        }, {
            name: '27-Feb',
            y: 162,
        }, {
            name: '27-Feb',
            y: 163,
        }, {
            name: '3-Mar',
            y: 163,
        }]
    }],
});

export default chartConfig;