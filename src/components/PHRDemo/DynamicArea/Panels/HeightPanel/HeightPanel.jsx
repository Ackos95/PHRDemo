import React from 'react';
import ReactHighcharts from 'react-highcharts';

import PanelBase from '../PanelBase';

import config from './highchart-config';

class HeightPanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-info height-panel';
        this.title = 'Height';
    }

    renderContent() {
        return <ReactHighcharts config={config} />
    }
}

export default HeightPanel;