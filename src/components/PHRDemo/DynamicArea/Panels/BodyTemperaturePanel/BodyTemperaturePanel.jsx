import React from 'react';

import PanelBase from '../PanelBase';

class BodyTemperaturePanel extends PanelBase {

    constructor(props) {
        super(props);
        
        this.additionalClasses = 'panel-warning';
        this.title = 'Body Temperature';
    }

    renderContent() {
        return <div />
    }
}

export default BodyTemperaturePanel;