import React from 'react';

// custom styles
import '../assets/styles/index.css';

const AllergiesPanel = () => (
    <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title">Allergies</h3>
        </div>
        <div className="panel-body">
            <ul>
                <li>Cows milk</li>
                <li>Weeds</li>
                <li>Egg yolks</li>
            </ul>
        </div>
    </div>
);

export default AllergiesPanel;