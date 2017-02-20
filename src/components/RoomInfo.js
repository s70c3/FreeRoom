/**
 * Created by s70c3 on 20.02.17.
 */
/**
 * Created by s70c3 on 31.01.17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as roomApi from '../api/roomAPI';
import '../styles/RoomInfo.css';

class RoomInfo extends Component {


    componentDidMount() {
        roomApi.getRoom(this.props.params.number);
    }

    render() {

        let room = this.props.room;
        if (room !== undefined) {
            room = this.props.room[0];

            let occupations = room.occupation.map(occ => {
                if (occ !== null) {
                    return occ.dayOfWeek + " " + occ.startHour + ":" +(occ.startMinute>10 ? occ.startMinute : '0'+occ.startMinute) + " -- " + occ.endHour + ":" + (occ.endMinute>10 ? occ.endMinute : '0'+occ.endMinute);
                }
            });
            let i=0;
            return (
                <div className="layout">
                    <h3>Аудитория {room.number}</h3>
                    <p>Занятость:</p>
                    <ul>
                        {
                            occupations.map(occ => {
                                return (
                                    <li key={i++}>{occ}</li>
                                );
                            })
                        }
                    </ul>
                </div>
            );
        }
        else {
            return (  <div className="layout">
                <h3>Данных пока нет. :(</h3>
            </div>)
        }
    }


}

const mapStateToProps = function (store) {
    return {
        rooms: store.roomState.rooms,
        dateTotal: store.roomState.dateTotal,
        room: store.roomState.room
    };
};


export default connect(mapStateToProps)(RoomInfo);