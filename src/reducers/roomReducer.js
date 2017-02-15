/**
 * Created by s70c3 on 12.02.17.
 */
import * as types from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
    rooms: [],
};

const roomReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_ROOMS_SUCCESS:
            return Object.assign({}, state, { rooms: action.rooms });

        case types.DELETE_ROOM_SUCCESS:
            const newRooms = _.filter(state.rooms, room => room.id !== action.roomNumber);
            return  Object.assign({}, state, { rooms: newRooms });

        case types.ADD_OCCUPATION_SUCCESS:
            return Object.assign({}, state, { room: action.room });

        case types.ADD_ROOM_SUCCESS:
            return Object.assign({}, state, { room: action.room });

        default:
            return state;

    }


}

export default roomReducer;