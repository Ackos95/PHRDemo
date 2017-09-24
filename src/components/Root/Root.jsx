import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// custom components
import PHRDemo from '../PHRDemo/PHRDemo';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

// custom styles
import './assets/styles/index.css';


// here would go some application default layout, if it exist
// in our case just simple router
const Root = () => (
    <div>
        <Navigation />
        <div className="main-wrapper background-light-gray">
            <Router>
                <Switch>
                    <Route exact path="/phr" component={PHRDemo} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </div>
        <Footer />
    </div>
);


export default Root;