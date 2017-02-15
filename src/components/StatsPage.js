/**
 * Created by s70c3 on 31.01.17.
 */
import React, {Component} from 'react';
import '../styles/Map.css';
import {connect} from 'react-redux';
import '../styles/Roomlist.css';

import * as roomApi from '../api/roomAPI';


class StatsPage extends Component {

    componentDidMount() {
        roomApi.getRooms();
    }

    render() {

        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let weekDay = date.getDay();
        if (weekDay === 0) weekDay = 7;
        let total = 0, occupied = 0;

        this.props.rooms.map(room => {
            room.occupation.map(occ => {
                    if (occ !== null) {
                        if (hour >= occ.startHour && minute >= occ.startMinute) {
                            console.log(hour < occ.endHour, hour, occ.endHour);
                            if (hour < occ.endHour || (hour === occ.endHour && minute <= occ.endMinute)) {
                                room.state = true;
                                occupied++;
                            }
                        }
                    }
                }
            )
            total++;
        });

        return (
            <p>Сейчас свободно:
                {(total-occupied) / total * 100}% аудиторий.
            </p>
        );
    }


}

const mapStateToProps = function (store) {
    return {
        rooms: store.roomState.rooms
    };
};

export default connect(mapStateToProps)(StatsPage);

