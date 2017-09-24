import React from 'react';

// custom components
import AllergiesPanel from './BasicPanels/AllergiesPanel/AllergiesPanel';
import MedicationsPanel from './BasicPanels/MedicationsPanel/MedicationsPanel';
import ProblemsPanel from './BasicPanels/ProblemsPanel/ProblemsPanel';
import BaseInfo from './InformationBoxes/BaseInfo/BaseInfo';
import MoreInfo from './InformationBoxes/MoreInfo/MoreInfo';
import TimelinePanel from './Panels/TimelinePanel/TimelinePanel';
import LabResultsPanel from './Panels/LabResultsPanel/LabResultsPanel';
import BloodPressurePanel from './Panels/BloodPressurePanel/BloodPressurePanel';
import BodyTemperaturePanel from './Panels/BodyTemperaturePanel/BodyTemperaturePanel';
import HeightPanel from './Panels/HeightPanel/HeightPanel';
import PulsePanel from './Panels/PulsePanel/PulsePanel';
import WeightPanel from './Panels/WeightPanel/WeightPanel';

const PHRDemo = () => (
    <div className="container" style={{ paddingTop: 32 }}>
        <div className="row">
            <div className="col-md-9">
                <BaseInfo />
                <MoreInfo />
                <div className="sortable-panels">
                    <TimelinePanel />
                    <LabResultsPanel />
                    <BloodPressurePanel />
                    <BodyTemperaturePanel />
                    <HeightPanel />
                    <PulsePanel />
                    <WeightPanel />
                </div>
            </div>
            <div className="col-md-3">
                <AllergiesPanel />
                <MedicationsPanel />
                <ProblemsPanel />
            </div>
        </div>
    </div>
);

export default PHRDemo;