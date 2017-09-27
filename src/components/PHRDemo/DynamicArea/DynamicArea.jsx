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
                <LabResultsPanel data={[
                    {
                        loinc: "2093-3",
                        name: "S-Cholesterol",
                        normal_max: 200,
                        normal_min: null,
                        time: "2014-03-04T00:46:02.000+01:00",
                        unit: "mg/dL",
                        value: 187
                    },
                    {
                        loinc: "2085-9",
                        name: "S-HDL-Cholesterol",
                        normal_max: 150,
                        normal_min: 30,
                        time: "2014-02-19T08:30:29.000+01:00",
                        unit: "mg/dL",
                        value: 36
                    },
                    {
                        loinc: "30522-7",
                        name: "S-CRP",
                        normal_max: 5,
                        normal_min: 0,
                        time: "2014-02-03T05:31:06.000+01:00",
                        unit: "mg/L",
                        value: 6
                    },
                    {
                        loinc: "30522-7",
                        name: "S-CRP",
                        normal_max: 5,
                        normal_min: 0,
                        time: "2014-01-18T20:49:52.000+01:00",
                        unit: "mg/L",
                        value: 12
                    },
                    {
                        loinc: "2093-3",
                        name: "S-Cholesterol",
                        normal_max: 200,
                        normal_min: null,
                        time: "2014-03-04T00:46:02.000+01:00",
                        unit: "mg/dL",
                        value: 187
                    }
                ]} />
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