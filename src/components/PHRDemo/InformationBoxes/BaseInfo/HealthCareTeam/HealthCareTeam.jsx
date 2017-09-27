import React from 'react';
import PropTypes from 'prop-types';

// custom styles
import './assets/styles/index.css';

const HealthCareTeam = ({ image }) => (
    <div className="patient-team">
        <div className="ver-spacer left">
            <div className="mask">
            </div>
        </div>
        <p>Healthcare team:</p>
        <div className="doctor-image">
            <img src={image} alt="Doctor" />
        </div>
    </div>
);

HealthCareTeam.propTypes = {
    image: PropTypes.string.isRequired
};

export default HealthCareTeam;

