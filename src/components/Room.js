/**
 * Created by s70c3 on 02.02.17.
 */
import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import '../styles/Room.css';
import * as roomApi from '../api/roomAPI';

class Room extends Component {

    constructor(props) {
        super(props);
        this.state = {clicked: 'none'}
    }

    onMapClick() {
        roomApi.getRoom(this.props.room.number);
        browserHistory.push(`/rooms/${this.props.room.number}`);
    };


    render() {
        return (    <g>
                        <rect className={this.props.room.state ? "notFreeRoom" : "freeRoom"}
                              x={this.props.room.coordinates.x*this.props.rectWidth}
                              y={this.props.room.coordinates.y*this.props.rectWidth}
                              width={this.props.rectWidth}
                              height={this.props.rectWidth}
                              onClick={this.onMapClick.bind(this, 'na')}
                        />
                <text  className="roomText"
                       x={this.props.room.coordinates.x*this.props.rectWidth+this.props.rectWidth/2-10}
                       y={this.props.room.coordinates.y*this.props.rectWidth+this.props.rectWidth/2+5}>
                    {this.props.room.number}
                    </text>
            </g>

        );
    };

}

export default Room;