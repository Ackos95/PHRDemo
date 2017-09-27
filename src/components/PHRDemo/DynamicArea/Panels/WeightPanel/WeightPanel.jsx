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

    renderFooter() {
        return (
            <div className="last-measurement">
                As of:
                <span className="last-cw-date">03-Mar-2014 at 07:28</span>
                <div className="last-cw">47.6 kg</div>
            </div>
        )
    }
}

export default WeightPanel;