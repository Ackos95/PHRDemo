import React from 'react';
// custom styles
import './assets/styles/index.css';
import logoImage from './assets/images/ehrscape-32x32.png';
const Navigation = () => (
    <nav className="navbar navbar-default navbar-fixed-top navbar-blue">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <a className="navbar-brand"><img src={logoImage} alt="Logo"/> EhrScape</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><a>Home</a></li>
                    <li className="selected"><a>Demo</a></li>
                    <li><a>API Explorer</a></li>
                    <li><a>Documentation</a></li>
                    <li><a>Community</a></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navigation;
