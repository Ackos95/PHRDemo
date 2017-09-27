import React from 'react';
import ReactHighcharts from 'react-highcharts';

import PanelBase from '../PanelBase';

import config from './highchart-config';

class BloodPressurePanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-danger';
        this.title = 'Blood Pressure';
    }

    renderContent() {
        return <ReactHighcharts config={config}/>
    }

}

export default BloodPressurePanel;