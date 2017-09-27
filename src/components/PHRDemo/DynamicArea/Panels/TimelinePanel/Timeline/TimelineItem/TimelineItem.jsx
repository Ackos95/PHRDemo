import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import $ from 'jquery';
import 'jquery-ui/ui/effects/effect-fade'

// custom components
import TimelineSubItem from './TimelineSubItem/TimelineSubItem';

class TimelineItem extends Component {

    static propTypes = {
        element: PropTypes.shape({
            label: PropTypes.string.isRequired,
            composer: PropTypes.string,
            time: PropTypes.string.isRequired,
            children: PropTypes.array
        }).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };

        this.renderChildren = this.renderChildren.bind(this);
        this.openChildren = this.openChildren.bind(this);
    }

    renderChildren() {
        const { element: { children } } = this.props;
        const retArr = [];

        if (children)
            children.forEach((child) => retArr.push(<TimelineSubItem element={child} key={`${child.label}`} />));
        return retArr;
    }

    openChildren() {
        this.setState({ expanded: !this.state.expanded });
        $(this.refs.children).slideToggle('2000', 'easeInOutCubic');
    }

    render() {
        const { openChildren, renderChildren, props: { element: { label, composer, time } }, state: { expanded } } = this;
        const showDate = moment(time).format('DD-MM-YYYY HH:mm');
        const showTime = moment(time).format('DD-MMM');

        return (
            <li className="timeline-item">
                <div className="timeline-date">
                    <span>{showDate}</span>
                    <span>{showTime}</span>
                </div>
                <div className="timeline-icon fa-stethoscope" />
                <div className="timeline-label">
                    <div className={'timeline-title ' + (expanded ? 'expanded' : 'collapsed')} ref="itemHeading" onClick={openChildren}>
                        <h3>{`${label}` + (composer ? ` | ${composer}` : '')}</h3>
                    </div>
                    <div className="timeline-content" ref="children" style={{ display: 'none' }}>
                        <ul className="form-element">
                            {renderChildren()}
                        </ul>
                    </div>
                </div>
            </li>
        );
    }
}

export default TimelineItem;