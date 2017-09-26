import React from 'react';

import PanelBase from '../PanelBase';

class WeightPanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-primary';
        this.title = 'Weight';
    }

    renderContent() {
        return <div />
    }
}

export default WeightPanel;