import React from 'react';

// custom styles
import '../assets/styles/index.css';

const ProblemsPanel = () => (
    <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title">Problems</h3>
        </div>
        <div className="panel-body">
            <ul>
                <li>Conductive hearing loss, bilateral</li>
                <li>Respiratory syncytial virus pneumonia</li>
                <li>Acute amoebic dysentery</li>
                <li>Superficial frostbite of neck</li>
            </ul>
        </div>
    </div>
);

export default ProblemsPanel;