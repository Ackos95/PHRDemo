import React from 'react';
import moment from 'moment';

import PanelBase from '../PanelBase';
// custom styles
import './assets/styles/index.css';
class LabResultsPanel extends PanelBase {

    constructor(props) {
        super(props);

        this.additionalClasses = 'panel-info';
        this.title = 'Laboratory Results';

        this.renderRows = this.renderRows.bind(this);
    }

    /*
         loinc
:
"2093-3"
name
:
"S-Cholesterol"
normal_max
:
200
normal_min
:
null
time
:
"2014-03-04T00:46:02.000+01:00"
unit
:
"mg/dL"
value
:
187
     */

    formatRow(row) {
        const { loinc, name, normal_max, normal_min, time, unit, value } = row;

        const range = normal_max && normal_min
            ? `${normal_min} - ${normal_max}`
            : (normal_max ? `< ${normal_max}` : `> ${normal_min}`);
        const showTime = moment(time).format('DD-MMM-YYYY at HH:mm');

        const valueInRange = normal_max && normal_min
            ? (value >= normal_min && value <= normal_max)
            : (normal_max ? (value <= normal_max) : (value >= normal_min));
        const showValue = valueInRange
            ? <span className="in-range">{value}</span>
            : <span className="not-in-range" >{value} <i className="fa fa-chevron-circle-up" /></span>

        return (
            <tr>
                <td>{name}</td>
                <td>{loinc}</td>
                <td>{range}</td>
                <td>{showValue}</td>
                <td>{unit}</td>
                <td>{showTime}</td>
            </tr>
        )
    }

    renderRows() {
        const { formatRow, props: { data } } = this;

        const retArr = [];
        data.forEach((row) => retArr.push(formatRow(row)))
        return retArr;
    }

    renderContent() {
        const { renderRows } = this;

        return (
            <table id="labResults" className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>LOINC</th>
                    <th>Normal Range</th>
                    <th>Value</th>
                    <th>Unit</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        );
    }
}

export default LabResultsPanel;