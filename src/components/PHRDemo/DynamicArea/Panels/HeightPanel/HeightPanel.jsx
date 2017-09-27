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
    
    renderFooter() {
        return (
            <div className="last-measurement">
                As of:
                <span className="last-ch-date">03-Mar-2014 at 07:28</span>
                <div className="last-ch">163 cm</div>
            </div>
        )
    }
}

export default HeightPanel;