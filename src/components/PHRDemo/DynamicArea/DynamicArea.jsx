import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';

import TimelinePanel from './Panels/TimelinePanel/TimelinePanel';
import LabResultsPanel from './Panels/LabResultsPanel/LabResultsPanel';
import BloodPressurePanel from './Panels/BloodPressurePanel/BloodPressurePanel';
import BodyTemperaturePanel from './Panels/BodyTemperaturePanel/BodyTemperaturePanel';
import HeightPanel from './Panels/HeightPanel/HeightPanel';
import PulsePanel from './Panels/PulsePanel/PulsePanel';
import WeightPanel from './Panels/WeightPanel/WeightPanel';


class DynamicArea extends Component {

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        $(this.refs.dynamicArea).sortable({
            handle: ".panel-heading",
                items: "div.panel",
            tolerance: "pointer"
        });
    }

    render() {
        return (
            <div ref="dynamicArea" className="dynamic-area sortable-ui">
                <TimelinePanel />
                <LabResultsPanel />
                <BloodPressurePanel />
                <BodyTemperaturePanel />
                <HeightPanel />
                <PulsePanel />
                <WeightPanel />
            </div>
        )
    }
}

export default DynamicArea;