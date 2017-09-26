import React from 'react';
import PanelBase from '../PanelBase';

class TimelinePanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-primary';
        this.title = 'Timeline';
    }

    // override
    renderContent() {
        return <h1>Testing</h1>
    }
}

export default TimelinePanel;