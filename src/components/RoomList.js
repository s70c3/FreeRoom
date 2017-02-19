/**
 * Created by s70c3 on 15.02.17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Roomlist.css';
import _ from 'lodash';
import * as roomApi from '../api/roomAPI';

class RoomList extends Component {

    componentDidMount() {
        roomApi.getRooms();
    }

    render() {

        let hour = this.props.dateTotal.hour;
        let minute = this.props.dateTotal.minute;
        let weekDay = this.props.dateTotal.weekDay;



 this.props.rooms.forEach(room => {
            room.occupation.forEach(occ => {
                    if(occ!==null)  {
                        if (weekDay === occ.dayOfWeek) {
                            if ((hour >= occ.startHour && minute >= occ.startMinute)) {
                                if ((hour < occ.endHour || (hour === occ.endHour && minute <= occ.endMinute))) {
                                    room.state = true;
                                }
                            }
                        }
                    }
                })

        });

 var freeRooms = _.filter(this.props.rooms, room => room.state !== true);

        console.log(freeRooms);

        return (
            < div>
                <h3>Свободные аудитории:</h3>
                <ul className="room-list">
                    {freeRooms.map(room => {
                        return (
                            <li key={room._id} className={room.state ? "notFreeRoomListItem" : "freeRoomListItem"} >
                                Аудитория {room.number}
                                </li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }


}

const mapStateToProps = function (store) {
    return {
        rooms: store.roomState.rooms,
        dateTotal: store.roomState.dateTotal
    };
};

export default connect(mapStateToProps)(RoomList);