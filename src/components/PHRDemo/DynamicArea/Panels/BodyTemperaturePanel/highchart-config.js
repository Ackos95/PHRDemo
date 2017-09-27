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
            borderWidth: 0,
            dataLabels: {
                enabled: false,
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [{
        name: 'Body Temperature',
        data: [{
            name: '22-Jan',
            y: 36.7,
        }, {
            name: '6-Feb',
            y: 38.4,
        }, {
            name: '25-Feb',
            y: 36.2,
        }, {
            name: '27-Feb',
            y: 37.3,
        }, {
            name: '27-Feb',
            y: 36,
        }, {
            name: '3-Mar',
            y: 37,
        }]
    }],
});

export default chartConfig;