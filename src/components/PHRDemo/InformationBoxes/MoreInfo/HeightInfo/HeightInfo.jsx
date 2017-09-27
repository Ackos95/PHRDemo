import React from 'react';
import PropTypes from 'prop-types';

const HeightInfo = ({ image, height, unit }) => (
    <div>
        <img className="patient-height-image" src={image} alt="Body" />
        <div className="patient-height-stats">
            <p>Height:</p>
            <div className="value height">{`${height} ${unit}`}</div>
        </div>
    </div>
);

HeightInfo.propTypes = {
    image: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
};

export default HeightInfo;