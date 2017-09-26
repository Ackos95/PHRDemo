import React from 'react';

import PanelBase from '../PanelBase';

class BloodPressurePanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-danger';
        this.title = 'Blood Pressure';
    }

    renderContent() {
        return <div />
    }
}

export default BloodPressurePanel;