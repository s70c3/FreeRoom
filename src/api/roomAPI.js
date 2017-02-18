/**
 * Created by s70c3 on 12.02.17.
 */
import axios from 'axios';
import store from '../store';
import { getRoomsSuccess, deleteRoomSuccess, getRoomSuccess, addRoomSuccess, addOccupationSuccess} from '../actions/roomActions';

/**
 * Get all users
 */

export function getRooms() {
    return axios.get('http://localhost:3001/rooms')
        .then(response => {
            store.dispatch(getRoomsSuccess(response.data));
            return response;
        })
        .catch(function() {
            window.alert("Getting failed")
        });
}


/**
 * Search users
 */

export function getRoom(query = '') {
    return axios.get('http://localhost:1337/rooms?q='+ query)
        .then(response => {
            store.dispatch(getRoomSuccess(response.data));
            return response;
        });
}

export function addRoom(number, x, y, state, occupation) {
    return axios.post('http://localhost:1337/rooms/', {
        number: number,
        occupation: occupation,
        x: x,
        y: y,
        state : state
    })
        .then(response => {
            store.dispatch(addRoomSuccess(response.data));
            return response;
        })
        .catch(function() {
            window.alert("Adding failed")
        });
}

export function addOccupation(number,  occupation) {
    console.log(occupation);
    return axios.put('http://localhost:1337/rooms/'+number, {
        occupation: occupation,

    })
        .then(response => {
            store.dispatch(addOccupationSuccess(response.data));
            return response;
        })
        .catch(function() {
            window.alert("Adding failed")
        });
}

export function deleteRoom(roomNumber) {
    return axios.delete('http://localhost:3001/rooms/' + roomNumber)
        .then(response => {
            store.dispatch(deleteRoomSuccess(roomNumber));
            return response;
        });
}
