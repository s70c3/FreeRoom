/**
 * Created by s70c3 on 12.02.17.
 */
import * as types from './actionTypes';

export function getRoomsSuccess(rooms) {
    return {
        type: types.GET_ROOMS_SUCCESS,
        rooms
    };
}

export function deleteRoomSuccess(roomNumber) {
    return {
        type: types.DELETE_ROOM_SUCCESS,
        roomNumber
    };
}

export function getRoomSuccess(room) {
    return {
        type: types.GET_ROOM_SUCCESS,
        room
    };
}

export function addRoomSuccess(room) {
    return {
        type: types.ADD_ROOM_SUCCESS,
        room
    };
}

export function addOccupationSuccess(room) {
    return {
        type: types.ADD_OCCUPATION_SUCCESS,
        room
    };
}


export function getOccupationsSuccess(occupation) {
    return {
        type: types.GET_OCCUPATIONS_SUCCESS,
        occupation
    };
}