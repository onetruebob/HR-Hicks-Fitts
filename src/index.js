import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store, { history } from './store';
import App from './containers/app';

import 'sanitize.css/sanitize.css';
import './index.css';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <div>
                    <App />
                </div>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    target
);
