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