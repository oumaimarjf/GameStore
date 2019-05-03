import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

// routing file
import Routes from './app-routes.jsx';

ReactDOM.render((
    <Routes history={browserHistory} />
), document.getElementById('app'));