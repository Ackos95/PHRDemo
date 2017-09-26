import React from 'react';
import PropTypes from 'prop-types';

// custom components
import ProgressBar from '../ProgressBar/ProgressBar';

const BloodPressureInfo = ({ bpValue }) => (
    <div className="row">
        <div className="col-md-4">
            <p>Blood Pressure:</p>
            <div className="value">{bpValue}</div>
        </div>
        <div className="col-md-4 centered">
            <ProgressBar loaded={40}/>
            <p>(Systolic)</p>
        </div>
        <div className="col-md-4 centered">
            <ProgressBar loaded={50}/>
            <p>(Diastolic)</p>
        </div>
    </div>
);

BloodPressureInfo.propTypes = {
    bpValue: PropTypes.string.isRequired
};

export default BloodPressureInfo;