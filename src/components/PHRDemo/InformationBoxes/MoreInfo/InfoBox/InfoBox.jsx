import React from 'react';
import PropTypes from 'prop-types';

const InfoBox = ({ label, value, unit, alertMessage }) => (
    <div className="col-md-4 bordered centered">
        <p>{label}</p>
        <div className="value">
            {`${value}` + (unit ? ` ${unit}` : '')} <span className="alert-notice">{alertMessage ? alertMessage : ''}</span>
        </div>
    </div>
);

InfoBox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string,
    alertMessage: PropTypes.string
};

export default InfoBox;