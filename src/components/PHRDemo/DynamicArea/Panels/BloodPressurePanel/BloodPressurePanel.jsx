import React from 'react';
import ReactHighcharts from 'react-highcharts';

import PanelBase from '../PanelBase';

import config from './highchart-config';

class BloodPressurePanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-danger bp';
        this.title = 'Blood Pressure';
    }

    renderContent() {
        return <ReactHighcharts config={config}/>
    }

    renderFooter() {
        return (
            <div className="last-measurement">
                As of:
                <span className="last-bp-date">03-Mar-2014 at 07:28</span>
                <div className="last-bp">88/70 mm[Hg]</div>
            </div>
        )
    }

}

export default BloodPressurePanel;