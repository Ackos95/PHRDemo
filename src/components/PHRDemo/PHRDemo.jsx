import React from 'react';

// custom components
import AllergiesPanel from './BasicPanels/AllergiesPanel/AllergiesPanel';
import MedicationsPanel from './BasicPanels/MedicationsPanel/MedicationsPanel';
import ProblemsPanel from './BasicPanels/ProblemsPanel/ProblemsPanel';
import BaseInfo from './InformationBoxes/BaseInfo/BaseInfo';
import MoreInfo from './InformationBoxes/MoreInfo/MoreInfo';
import DynamicArea from './DynamicArea/DynamicArea';

const PHRDemo = () => (
    <div className="container" style={{ paddingTop: 32 }}>
        <div className="row">
            <div className="col-md-9">
                <BaseInfo />
                <MoreInfo />
                <DynamicArea />
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