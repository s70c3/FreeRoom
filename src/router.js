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
import  Main from './components/Main'
import Delete from './components/Delete'
import RoomInfo from './components/RoomInfo';

export default (
<Router history={ browserHistory }>
    <Route component={App} >
        <Route component={Map}>
            <Route path="/" component={Main}/>
        <Route path="/add" component={OccupationForm} />
        <Route path="/list" component={RoomList} />
        <Route path="/stats" component={StatsPage} />
            <Route path="/room" component={RoomForm} />
            <Route path="/delete" component={Delete} />
            <Route path="/rooms/:number" component={RoomInfo} />
        </Route>
    </Route>
</Router>
);