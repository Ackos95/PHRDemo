import React from 'react';

// custom components
import InfoBox from './InfoBox/InfoBox';
import BloodPressureInfo from './BloodPressureInfo/BloodPressureInfo';
import SaturationInfo from './SaturationInfo/SaturationInfo';
import HeightInfo from './HeightInfo/HeightInfo';

// custom styles
import '../../../../../node_modules/flat-ui/css/flat-ui.css';

import bodyBlankFemaleImage from './assets/images/body-blank-female.png';

const MoreInfo = () => (
    <div className="well">
        <div className="row">
            <div className="col-md-8 bordered">
                <div className="row" style={{ minHeight: 67 }}>
                    <InfoBox label="Age" value={41} />
                    <InfoBox label="Weight" value={47.6} unit="kg" />
                    <InfoBox label="BMI" value={17.92} unit="kg/m2" alertMessage="Underweight (Risk)" />
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <BloodPressureInfo bpValue="88/70 mm[Hg]" />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <SaturationInfo satValue={97.5} />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <HeightInfo image={bodyBlankFemaleImage} height={164} unit="cm"/>
            </div>
        </div>
    </div>
);

export default MoreInfo;