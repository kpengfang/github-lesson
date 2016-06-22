import React from 'react';
import { render } from 'react-dom';
import {Router,hashHistory} from 'react-router';
import routes from './routes'

import 'bootstrap/dist/css/bootstrap.css';

let root = document.getElementById('app');
render(
    <Router routes={routes} history={hashHistory}/>
    , root );
