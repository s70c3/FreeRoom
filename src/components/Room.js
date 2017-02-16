/**
 * Created by s70c3 on 02.02.17.
 */
import React, {Component} from 'react';
import '../styles/Room.css';

class Room extends Component {

    constructor(props) {
        super(props);
        this.state = {clicked: 'none'}

    }

    componentDidMount() {
        this.mapState = "map-unselected"
    };

    onMapClick(area) {
        this.setState(
            function () {
                if (this.state.clicked === area) {
                    return {clicked: 'none'};
                } else {
                    return {clicked: area};
                }
            }
        );
    };

    componentDidUpdate() {
        this.emitEvent();
    };

    emitEvent() {
        const clickedEvent = new CustomEvent(
            'WorldMapClicked',
            {detail: {clickedState: this.state.clicked}}
        );
        window.dispatchEvent(clickedEvent);
    };

    changeCss() {
        const clicked = this.state.clicked;
        let newMapState = {
            na: "map-unselected"
        };
        if (clicked === 'none') {
            //no need to make any areas selected, skip past 'else'
        } else {
            newMapState[clicked] = "map-selected";
        }
        this.mapState = newMapState;
    };

    render() {
        this.changeCss();
        return (    <g>
                        <rect className={this.props.room.state ? "notFreeRoom" : "freeRoom"}
                              x={this.props.room.coordinates.x*this.rectWidth} y={this.props.room.coordinates.y*this.rectWidth}
                              width={this.rectWidth} height={this.rectWidth}
                              onClick={this.onMapClick.bind(this, 'na')}
                        />
                <text  className="roomText"
                       x={this.props.room.coordinates.x*this.rectWidth+this.rectWidth/2-10}
                       y={this.props.room.coordinates.y*this.rectWidth+this.rectWidth/2+5}>
                    {this.props.room.number}
                    </text>
            </g>

        );
    };

}

export default Room;