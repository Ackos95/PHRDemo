import React from 'react';

// custom styles
import './assets/styles/footer.css';

const Footer = () => (
    <div className="footer">
        <div className="footer-inner container">
            <div className="footer-list row">
                <div className="col-md-8">
                    <ul>
                        <li><a href="http://www.marand.com/" rel="noopener noreferrer" target="_blank">
                            <span className="xlight">© 2014</span> Marand
                        </a></li>
                        <li><a href="api-explorer.html" target="_blank">API Explorer</a></li>
                        <li><a href="community.html">Community</a></li>
                        <li><a href="index.html">FAQ</a></li>
                        <li><a href="terms.html">Terms</a></li>
                        <li><a href="privacy.html">Privacy</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <p style={{ marginTop: -5, fontSize: 16 }}>
                        Powered by: <a target="_blank" rel="noopener noreferrer" href="http://www.marand.com/thinkehr">Think!EHR Platform</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;