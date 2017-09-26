import React from 'react';

// custom components
import ProfileImage from './ProfileImage/ProfileImage';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import HealthCareTeam from './HealthCareTeam/HealthCareTeam';

// images (can be replaced with url sent through props)
import femaleImage from './assets/images/female.png';
import doctorImage from './assets/images/doctor.png';

const BaseInfo = () => (
    <div className="well">
        <div className="row">
            <div className="col-md-3">
                <ProfileImage image={femaleImage} />
            </div>
            <div className="col-md-6">
                <ProfileInfo
                    firstName="Mary"
                    lastName="Wilkinson"
                    dateOfBirth="1976-07-01T03:56:54.000Z"
                    gender="FEMALE"
                />
            </div>
            <div className="col-md-3">
                <HealthCareTeam image={doctorImage} />
            </div>
        </div>
    </div>
);

export default BaseInfo;