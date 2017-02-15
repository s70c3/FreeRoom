/**
 * Created by s70c3 on 31.01.17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Map.css';
import Room from './Room.js'

import * as roomApi from '../api/roomAPI';

class Map extends Component {

    componentDidMount() {
        roomApi.getRooms();
    }

    render() {

        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let weekDay = date.getDay();
        if (weekDay === 0) weekDay = 7;

        this.props.rooms.forEach(room => {
            room.occupation.forEach(occ => {
                if(occ!==null)  {
                if (hour >= occ.startHour && minute >= occ.startMinute ) {
                    console.log(hour < occ.endHour, hour, occ.endHour);
                    if ( hour < occ.endHour ||  (hour === occ.endHour && minute <= occ.endMinute)) {
                        console.log('hei');
                        room.state = true;
                    }
                }
            }
            }
            )
        });


        return (
            <div className="map-list">
                <svg className="map">
                    {this.props.rooms.map(room => {
                        return (
                            <Room key={room._id} room={room}/>
                        )
                    })
                    }
                </svg>
            </div>
        );
    }


}

const mapStateToProps = function (store) {
    return {
        rooms: store.roomState.rooms
    };
};

export default connect(mapStateToProps)(Map);