/**
 * Created by s70c3 on 07.02.17.
 */
import React, { Component } from 'react';
import '../styles/Grid.css';

class Grid extends  React.Component {
   // var vCoord;
    //var hCoord;
    


    
    render () {
        return(
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

        </svg>);
    }
}