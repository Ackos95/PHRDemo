import React from 'react';
import ReactHighcharts from 'react-highcharts';

import PanelBase from '../PanelBase';

import config from './highchart-config';

class BodyTemperaturePanel extends PanelBase {

    constructor(props) {
        super(props);
        
        this.additionalClasses = 'panel-warning';
        this.title = 'Body Temperature';
    }

    renderContent() {
        return <ReactHighcharts config={config} />
    }
}

export default BodyTemperaturePanel;