import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { startCase, toLower } from 'lodash';

const ProfileInfo = ({ firstName, lastName, dateOfBirth, gender, address }) => {

    let birthDate = dateOfBirth ? moment(dateOfBirth) : null;
    let diffYear = birthDate ? moment().diff(birthDate, 'year') : null;
    let diffMonth = birthDate ? moment().diff(birthDate, 'month') % 12 : null;

    return (
        <div>
            <h4>{firstName || lastName ? `${firstName} ${lastName}` : '-'}</h4>
            <p>Age: {diffYear || diffMonth ? `${diffYear}y ${diffMonth}m` : '-'}</p>
            <p>Gender: {startCase(toLower(gender)) || '-'}</p>
            <p>DOB: {birthDate ? birthDate.format('MMM. D, YYYY.') : '-'}</p>
            <p>Address: {address || '-'}</p>
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