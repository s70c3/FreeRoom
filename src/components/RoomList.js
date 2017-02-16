/**
 * Created by s70c3 on 15.02.17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Roomlist.css';

import * as roomApi from '../api/roomAPI';

class RoomList extends Component {

    componentDidMount() {
        roomApi.getRooms();
    }

    render() {

        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let weekDay = date.getDay();
        if (weekDay === 0) weekDay = 7;

        this.props.rooms.map(room => {
            room.occupation.map(occ => {
                    if(occ!==null)  {
                        if (hour >= occ.startHour && minute >= occ.startMinute ) {
                            console.log(hour < occ.endHour, hour, occ.endHour);
                            if ( hour < occ.endHour ||  (hour === occ.endHour && minute <= occ.endMinute)) {
                                room.state = true;
                            }
                        }
                    }
                }
            )
        });


        return (
                <ul className="room-list">
                    {this.props.rooms.map(room => {
                        return (
                            <li key={room._id} className={room.state ? "notFreeRoomListItem" : "freeRoomListItem"} >
                                Аудитория: {room.number} - {room.state ? "занята" : "свободна"}
                                </li>
                        )
                    })
                    }
                </ul>
        );
    }


}

const mapStateToProps = function (store) {
    return {
        rooms: store.roomState.rooms
    };
};

export default connect(mapStateToProps)(RoomList);