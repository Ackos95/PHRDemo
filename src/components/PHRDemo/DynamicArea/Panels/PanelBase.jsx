import React, { Component } from 'react';
import $ from 'jquery';

class PanelBase extends Component {

    constructor(props) {
        super(props);

        this.additionalClasses = '';
        this.title = '';

        this.close = this.close.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    /**
     * Method for overriding
     *
     * Here should be all of regular `render` method content
     */
    renderContent() {
        return null;
    }

    close() {
        $(this.refs.panel).fadeOut(300, function() {
            this.remove();
        });
    }

    render() {
        const { additionalClasses, title, close, renderContent } = this;

        return (
            <div className={`panel ${additionalClasses}`} ref="panel">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {title}
                        <span className="remove" onClick={close}>
                            <i className="glyphicon glyphicon-remove" />
                        </span>
                    </h3>
                </div>
                <div className="panel-body">
                    {renderContent()}
                </div>
            </div>
        );
    }
}

export default PanelBase;