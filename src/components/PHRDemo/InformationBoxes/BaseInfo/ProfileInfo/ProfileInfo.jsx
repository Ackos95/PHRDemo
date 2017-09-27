import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { startCase, toLower } from 'lodash';

const ProfileInfo = ({ firstName, lastName, dateOfBirth, gender, address }) => {

    let birthDate = dateOfBirth ? moment(dateOfBirth) : null;
    let diffYear = birthDate ? moment().diff(birthDate, 'year') : null;
    let diffMonth = birthDate ? moment().diff(birthDate, 'month') % 12 : null;

    return (
        <div className="patient-info">
            <h4 id="patient-name">{firstName || lastName ? `${firstName} ${lastName}` : '-'}</h4>
            <p>Age: <span>{diffYear || diffMonth ? `${diffYear}y ${diffMonth}m` : '-'}</span></p>
            <p>Gender: <span>{startCase(toLower(gender)) || '-'}</span></p>
            <p>DOB: <span>{birthDate ? birthDate.format('MMM. D, YYYY.') : '-'}</span></p>
            <p>Address: <span>{address || '-'}</span></p>
        </div>
    );
};

ProfileInfo.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dateOfBirth: PropTypes.string,
    gender: PropTypes.string,
    address: PropTypes.string
};

export default ProfileInfo;