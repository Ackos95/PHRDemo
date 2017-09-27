import React from 'react';
import ReactHighcharts from 'react-highcharts';

import PanelBase from '../PanelBase';

import config from './highchart-config';

class WeightPanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-primary weight-panel';
        this.title = 'Weight';
    }

    renderContent() {
        return <ReactHighcharts config={config} />
    }
}

export default WeightPanel;