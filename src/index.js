import { render } from 'react-dom'
import React from 'react';
import App from './App';

import './styles/index.scss';

import * as serviceWorker from './serviceWorker';

render(
    <App/>,
    document.getElementById('root')
);

serviceWorker.unregister();
