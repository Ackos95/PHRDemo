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

    renderFooter() {
        return (
            <div className="last-measurement">
                As of:
                <span className="last-pulse-date">03-Mar-2014 at 07:28</span>
                <div className="last-pulse">88 /min</div>
            </div>
        )
    }
}

export default PulsePanel;