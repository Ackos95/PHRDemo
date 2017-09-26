import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import { Provider } from 'react-redux';
import { createStore} from 'redux';
import appReducer from './reducers';

// custom components
import Root from './components/Root/Root';

import registerServiceWorker from './registerServiceWorker';

window.jQuery = window.jquery = window.$ = $;
window.a = 'test';
console.log(window);

let store = createStore(appReducer);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
