import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Map from './components/Map';
import AddPage from './components/AddPage';
import StatsPage from './components/StatsPage';
import { Router, Route, browserHistory  } from 'react-router'
import './styles/index.css';

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route component={App} >
        <Route path="/map" component={Map} />
        <Route path="/add" component={AddPage} />
        <Route path="/stats" component={StatsPage} />
        </Route>
    </Router>,
  document.getElementById('root')
);
