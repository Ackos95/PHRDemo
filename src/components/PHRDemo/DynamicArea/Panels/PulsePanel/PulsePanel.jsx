import React from 'react';

import PanelBase from '../PanelBase';

class PulsePanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-success';
        this.title = 'Pulse';
    }

    renderContent() {
        return <div />
    }
}

export default PulsePanel;