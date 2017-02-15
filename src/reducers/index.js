/**
 * Created by s70c3 on 12.02.17.
 */
import { combineReducers } from 'redux';

// Reducers
import roomReducer from './roomReducer';


// Combine Reducers
var reducers = combineReducers({
    roomState: roomReducer,
});

export default reducers;