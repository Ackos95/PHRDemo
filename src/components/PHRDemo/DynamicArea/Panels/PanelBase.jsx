import React, { Component } from 'react';
import $ from 'jquery';

// custom styles
import './assets/styles/index.css';

class PanelBase extends Component {

    constructor(props) {
        super(props);

        this.additionalClasses = '';
        this.title = '';

        this.closePanel = this.closePanel.bind(this);
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

    /**
     * Method for overriding
     *
     * Here should be all of footer render
     */
    renderFooter() {
        return null;
    }

    closePanel() {
        $(this.refs.panel).fadeOut(300, function() {
            this.remove();
        });
    }

    render() {
        const { additionalClasses, title, closePanel, renderContent, renderFooter } = this;

        return (
            <div className={`panel ${additionalClasses}`} ref="panel">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {title}
                        <span className="remove" onClick={closePanel}>
                            <i className="glyphicon glyphicon-remove" />
                        </span>
                    </h3>
                </div>
                <div className="panel-body">
                    {renderContent()}
                </div>
                <div className="panel-footer">
                    {renderFooter()}
                </div>
            </div>
        );
    }
}

export default PanelBase;