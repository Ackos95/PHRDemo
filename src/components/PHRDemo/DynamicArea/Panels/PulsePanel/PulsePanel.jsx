import React from 'react';
import ReactHighcharts from 'react-highcharts';

import PanelBase from '../PanelBase';

import config from './highchart-config';

class PulsePanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-success pulse-panel';
        this.title = 'Pulse';
    }

    renderContent() {
        return <ReactHighcharts config={config} />
    }
}

export default PulsePanel;