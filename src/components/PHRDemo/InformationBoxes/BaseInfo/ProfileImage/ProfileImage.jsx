import React from 'react';
import PropTypes from 'prop-types';

// custom styles
import './assets/styles/index.css';

const ProfileImage = ({ image }) => (
    <div className="profile-image">
        <img src={image} alt="Profile" />
    </div>
);

ProfileImage.propTypes = {
    image: PropTypes.string.isRequired
};

export default ProfileImage;