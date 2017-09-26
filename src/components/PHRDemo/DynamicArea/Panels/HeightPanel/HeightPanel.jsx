import React from 'react';

import PanelBase from '../PanelBase';

class HeightPanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-info';
        this.title = 'Height';
    }

    renderContent() {
        return <div />
    }
}

export default HeightPanel;