import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'jquery-ui/ui/effects/effect-fade'


class TimelineSubItem extends Component {

    static propTypes = {
        element: PropTypes.shape({
            label: PropTypes.string.isRequired,
            children: PropTypes.arrayOf(PropTypes.shape({
                label: PropTypes.string.isRequired,
                displayValue: PropTypes.string.isRequired
            }))
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            expanded: true
        };

        this.renderChildren = this.renderChildren.bind(this);
        this.openChildren = this.openChildren.bind(this);
    }

    renderChildren() {
        const { props: { element: { children } } } = this;
        const retArr = [];
        if (children)
            children.forEach((el) => retArr.push(<li
                key={`${el.label}-${el.displayValue}`}
                className="form-content"
            >
                <span>{el.label}: </span>{el.displayValue}
            </li>));
        return retArr;
    }

    openChildren() {
        this.setState({ expanded: !this.state.expanded });
        $(this.refs.children).slideToggle('2000', 'easeInOutCubic');
    }

    render() {
        const { renderChildren, openChildren, props: { element: { label } }, state: { expanded } } = this;
        return (
            <div>
                <li className={'form-header ' + (expanded ? 'opened' : 'closed')} onClick={openChildren}>
                    <i className="fa fa-angle-down" />{label}
                </li>
                <ul ref="children" style={{ display: 'block' }}>
                    {renderChildren()}

                    <li className="form-content"><span>Date of onset: </span>06-01-1999 10:03</li>
                    <li className="form-content"><span>Date of resolution/remission: </span>10-01-1999 21:23</li>
                </ul>
            </div>
        )
    }
}

export default TimelineSubItem;