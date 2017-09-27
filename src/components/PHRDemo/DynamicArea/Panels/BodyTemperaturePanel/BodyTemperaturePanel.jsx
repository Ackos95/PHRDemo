import React from 'react';
import ReactHighcharts from 'react-highcharts';

import PanelBase from '../PanelBase';

import config from './highchart-config';

class BodyTemperaturePanel extends PanelBase {

    constructor(props) {
        super(props);
        
        this.additionalClasses = 'panel-warning bt';
        this.title = 'Body Temperature';
    }

    renderContent() {
        return <ReactHighcharts config={config} />
    }
    
    renderFooter() {
        return (
            <div className="last-measurement">
                As of:
                <span className="last-bt-date">03-Mar-2014 at 07:28</span>
                <div className="last-bt">37.7 °C</div>
            </div>
        )
    }
}

export default BodyTemperaturePanel;