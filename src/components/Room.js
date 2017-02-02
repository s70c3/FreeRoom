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
        this.mapState = {
            na: "map-unselected"
        };
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
        return (
            <div>
                <svg className="map-img" xmlns="http://www.w3.org/2000/svg" width="672" height="315"
                     viewBox="0 0 672 315" id="svg5249">
                    <defs id="defs5257">
                        <linearGradient id="linearGradient1">
                            <stop offset="0" id="stop4301" stopColor="#cc5252"/>
                        </linearGradient>
                        <linearGradient id="linearGradient4293">
                            <stop offset="0" id="stop4295" stopColor="#84297f"/>
                        </linearGradient>
                    </defs>
                    <g id="AF" className={this.mapState.na} onClick={this.onMapClick.bind(this, 'af')}>
                           <rect className="roomFree" width="100" height="100" />

                           </g>

                </svg>
            </div>
        );
    };

}

export  default Room;