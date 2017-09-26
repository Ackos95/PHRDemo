import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ loaded, additionalClasses }) => (
    <div className="progress">
        <div className={`progress-bar ${additionalClasses}`} style={{ width: `${loaded.toFixed(2)}%` }}/>
    </div>
);

ProgressBar.propTypes = {
    loaded: PropTypes.number.isRequired,
    additionalClasses: PropTypes.string
};

export default ProgressBar;