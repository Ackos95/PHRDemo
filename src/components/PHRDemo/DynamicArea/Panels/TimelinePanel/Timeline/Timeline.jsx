import React, { Component } from 'react';
import PropTypes from 'prop-types';

// custom components
import TimelineItem from './TimelineItem/TimelineItem';

// custom styles
import './assets/styles/index.css';

/*
    Data model:

    [
        {
            label: string,
            composer: string,
            time: timestamp,
            children: [
                {
                    label: string,
                    children: [ { label: string, displayValue: string } ]
                }
            ]
        }
    ]
 */

class Timeline extends Component {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            composer: PropTypes.string,
            time: PropTypes.string.isRequired,
            children: PropTypes.array
        })).isRequired
    };

    constructor(props) {
        super(props);

        this.renderItems = this.renderItems.bind(this);
    }

    renderItems() {
        const { data } = this.props;
        const retArr = [];

        if (data)
            data.forEach((el) => retArr.push(<TimelineItem element={el} key={`${el.label}-${el.time}`} />));
        return retArr;
    }

    render() {
        const { renderItems } = this;

        return (
            <ul className="timeline">
                {renderItems()}
            </ul>
        );
    }
}

export default Timeline;