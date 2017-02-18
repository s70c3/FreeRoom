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
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        if (this.width<400) {
            this.rectWidth=40;
        }
        else this.rectWidth=60;
    }


    componentWillReceiveProps(nextProps) {
        console.log('will receive props');    // 1
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
                    if ( hour < occ.endHour || (hour === occ.endHour && minute <= occ.endMinute)) {
                        room.state = true;
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
        k=0;
        for(i = 0; i<this.height; i+=this.rectWidth) {
            yCoords.push(k);
            k++;
        }


        return (
            <div className="map-layout">
                <svg className="map">
                    {xCoords.map(x => {
                        return (
                            <text key={x} className="coords"
                                   x={x*this.rectWidth+this.rectWidth/2}
                                   y={this.rectWidth/2}>
                                {x}
                            </text>  )
                    })
                    }
                    {yCoords.map(y => {
                        return (
                            <text key={y} className="coords"
                                   y={y*this.rectWidth+this.rectWidth/2}
                                   x={this.rectWidth/2}>
                                {y}
                            </text>  )
                    })
                    }

                    {this.props.rooms.map(room => {
                        return (
                            <Room key={room._id} room={room} rectWidth={this.rectWidth} />
                        )
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
        rooms: store.roomState.rooms
    };
};


export default connect(mapStateToProps)(Map);