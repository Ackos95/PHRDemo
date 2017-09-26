import React from 'react';

import PanelBase from '../PanelBase';

class LabResultsPanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-info';
        this.title = 'Laboratory Results';
    }

    renderContent() {
        return <div />
    }
}

export default LabResultsPanel;