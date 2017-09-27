import React from 'react';

import PanelBase from '../PanelBase';
import Timeline from './Timeline/Timeline';

class TimelinePanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-primary';
        this.title = 'Timeline';
    }

    // override
    renderContent() {
        return <Timeline data={[
            {
                label: 'Medical Diagnosis',
                composer: 'ehrscape',
                time: '2014-03-10T02:51:49.000+01:00',
                children: [
                    {
                        label: 'Test',
                        children: [],
                    }
                ]
            }
        ]}/>
    }
}

export default TimelinePanel;