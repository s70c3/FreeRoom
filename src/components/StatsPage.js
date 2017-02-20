/**
 * Created by s70c3 on 31.01.17.
 */
import React, {Component} from 'react';
import '../styles/Map.css';
import {connect} from 'react-redux';
import '../styles/StatsPage.css';

import * as roomApi from '../api/roomAPI';


class StatsPage extends Component {

    componentDidMount() {
        roomApi.getRooms();
    }

    render() {

        let total = 0, occupied = 0;
        let date = this.props.dateTotal;
        var hour, minute, weekDay;

        if (date !== undefined) {
            hour = parseInt(date.hour, 10);
            minute = parseInt(date.minute, 10);
            weekDay = date.weekDay;

            this.props.rooms.forEach(room => {
                room.occupation.forEach(occ => {
                        if (occ !== null) {
                            if (weekDay === occ.dayOfWeek || date === occ.date) {
                                console.log('week');
                                if (hour >= occ.startHour || (hour === occ.startHour && minute >= occ.startMinute)) {
                                    console.log('start');
                                    if (hour < occ.endHour || (hour === occ.endHour && minute <= occ.endMinute)) {
                                        occupied++;
                                        room.state = true;
                                    }
                                }
                            }
                        }
                    }
                )
                total++;
            });

            let value = Math.round(((total - occupied) / total * 100));
            return (
                <div>
                    <div className="cpb-container">
                        <p>Процент свободных аудиторий:</p>
                        <div className="circle-progress-bar">
                            <p className="cpb-value">{value}%</p>
                            <svg className="circle-svg">
                                <linearGradient id="linear-gradient">
                                    <stop offset="0%" stopColor="#4a5a1c"></stop>
                                    <stop offset="100%" stopColor="#cad473"></stop>
                                </linearGradient>
                                <circle className="circle-progress-bar" r="100" cx="105" cy="105" fill="none"
                                        stroke="#ececec" strokeWidth="5"></circle>
                                <circle className="circle-progress-bar cpb-progress cpb-progress-value" r="100" cx="105"
                                        cy="105" fill="none" stroke="url(#linear-gradient)" strokeDasharray="628"
                                        strokeDashoffset={((100 - value) / 100) * Math.PI * (200)}
                                        strokeWidth="7"></circle>
                            </svg>
                        </div>
                    </div>
                </div>
            );
        }
    }

}


const mapStateToProps = function (store) {
    return {
        rooms: store.roomState.rooms,
        dateTotal: store.roomState.dateTotal
    };
};

export default connect(mapStateToProps)(StatsPage);

