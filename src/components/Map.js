/**
 * Created by s70c3 on 31.01.17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Map.css';
import Room from './Room.js'

import * as roomApi from '../api/roomAPI';

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {clicked: 'none'}
    }
    componentDidMount() {
        roomApi.getRooms();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        if (this.width<400) {
            this.rectWidth=40;
        }
        else this.rectWidth=60;

    }

    getDayName(number) {
        let names = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        return names[number];
    }

    render() {
        let date = this.props.dateTotal;
        var hour, minute, weekDay;
        if(date === undefined) {
            date = new Date();
            hour = date.getHours();
            minute = date.getMinutes();
            weekDay = this.getDayName(date.getDay());
        }
        else {
            hour = date.hour;
            minute = date.minute;
            weekDay = date.weekDay;
        }

        this.props.rooms.forEach(room => {
            room.occupation.forEach(occ => {
                    if(occ!==null) {
                        console.log(weekDay, occ.dayOfWeek)
                        if (weekDay === occ.dayOfWeek || date === occ.date) {
                        if (hour >= occ.startHour && minute >= occ.startMinute) {
                            if (hour < occ.endHour || (hour === occ.endHour && minute <= occ.endMinute)) {
                                room.state = true;
                            }
                        }
                    }
                    }
                }
            )
        });
        var xCoords=[];
        var yCoords=[];
        var k=0;
        for(var i = 0; i<this.width; i+=this.rectWidth) {
            xCoords.push(k);
            k++;
        }
        k=1;
        for(i = 0; i<this.height; i+=this.rectWidth) {
            yCoords.push(k);
            k++;
        }


        return (
            <div className="map-layout">
                <svg className="map">
                    {this.props.rooms.map(room => {
                        return (
                            <Room key={room._id} room={room} rectWidth={this.rectWidth} />
                        )
                    })
                    }

                    {xCoords.map(x => {
                        return (
                            <text key={x+"xcoord"} className="coords"
                                   x={x*this.rectWidth+2}
                                   y={'1em'}>
                                {x}
                            </text>  )
                    })
                    }
                    {yCoords.map(y => {
                        return (
                            <text key={y+"ycoord"} className="coords"
                                   y={y*this.rectWidth+12}
                                   x={0}>
                                {y}
                            </text>  )
                    })
                    }
                </svg>
        {this.props.children}
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


export default connect(mapStateToProps)(Map);