/**
 * Created by s70c3 on 12.02.17.
 */
import * as types from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
    rooms: [],
    dateTotal:  {
        date: undefined,
        hour: undefined,
        minute: undefined,
        weekDay: undefined
    }
};

const roomReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_ROOMS_SUCCESS:
            return {
                ...state,
            rooms: action.rooms
            };

        case types.DELETE_ROOM_SUCCESS:

            const newRooms = _.filter(state.rooms, room => room.number !== parseInt(action.roomNumber, 10));
            return  { ...state, rooms: newRooms};

        case types.ADD_OCCUPATION_SUCCESS:
            const roomsWithOccupations = state.rooms.concat(action.room);
            return {...state,  rooms: roomsWithOccupations};

        case types.ADD_ROOM_SUCCESS:
            const roomsWithAdded = state.rooms.concat(action.room);
            return {...state,  rooms: roomsWithAdded};

        case types.SET_DATE:
            return {...state, dateTotal: action.date};

        default:
            return state;

    }


}

export default roomReducer;