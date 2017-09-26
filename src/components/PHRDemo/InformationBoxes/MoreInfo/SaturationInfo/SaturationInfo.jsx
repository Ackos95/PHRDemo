import React from 'react';
import PropTypes from 'prop-types';

// custom components
import ProgressBar from '../ProgressBar/ProgressBar';

const SaturationInfo = ({ satValue }) => (
    <div className="row">
        <div className="col-md-4">
            <p>Oxygen Saturation:</p>
            <div className="value">{satValue.toFixed(2)}%</div>
        </div>
        <div className="col-md-8">
            <ProgressBar loaded={satValue} additionalClasses="progress-bar-success" />
        </div>
    </div>
);

SaturationInfo.propTypes = {
    satValue: PropTypes.number.isRequired
};

export default SaturationInfo;