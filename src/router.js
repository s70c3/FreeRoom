/**
 * Created by s70c3 on 11.02.17.
 */

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//Pages
import App from './components/App';
import Map from './components/Map';
import OccupationForm from './components/OccupationForm';
import RoomForm from './components/RoomForm';
import RoomList from './components/RoomList';
import StatsPage from './components/StatsPage';


export default (
<Router history={ browserHistory }>
    <Route component={App} >
        <Route path="/map" component={Map} />
        <Route path="/add" component={OccupationForm} />
        <Route path="/room" component={RoomForm} />
        <Route path="/list" component={RoomList} />
        <Route path="/stats" component={StatsPage} />
    </Route>
</Router>
);