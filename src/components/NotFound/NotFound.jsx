import React from 'react';
import { Redirect } from 'react-router-dom';

// hard-coded redirect to demo page
const NotFound = () => <Redirect to="/phr" />;

export default NotFound;