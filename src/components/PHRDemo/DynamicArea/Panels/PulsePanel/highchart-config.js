import moment from 'moment';

import baseConfig from '../highcharts-config-base';

const chartConfig = Object.assign({}, baseConfig, {
    chart: {
        type: 'area'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e-%b',
            year: '%b'
        },
    },
    // tooltip: {
    //     pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    // },
    plotOptions: {
        area: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Pulse',
        data: [
            [moment('2014-01-22T17:30:10.000+01:00').valueOf(), 119],
            [moment('2014-02-06T08:26:28.000+01:00').valueOf(), 54],
            [moment('2014-02-25T21:17:11.000+01:00').valueOf(), 113],
            [moment('2014-02-27T01:35:11.000+01:00').valueOf(), 151],
            [moment('2014-02-27T14:37:43.000+01:00').valueOf(), 157],
            [moment('2014-03-03T07:28:33.000+01:00').valueOf(), 88],
        ]
    }]
});

export default chartConfig;