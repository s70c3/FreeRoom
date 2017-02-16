/**
 * Created by s70c3 on 14.02.17.
 */
import React, { Component } from 'react';
import '../styles/form.css';

import * as roomApi from '../api/roomAPI';


class RoomForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '200',
            x:0,
            y:0,

            occupation: {
                date:'',
                startHour: '7',
                startMinute: '0',
                endHour: '7',
                endMinute: '0',
                dayOfWeek: '1'
            }

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

       this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit() {
        console.log(this.state);
        roomApi.addRoom(this.state.number,this.state.x, this.state.y, false);
    }
    render() {
        return (
            <div className="Add-container">
                <form className="room-form">
                    <label>Номер:
                        <input
                            type="number"
                            name="number"
                            onChange={this.handleChange}
                        /></label>
                    <p>Координаты:</p>
                    <label>
                        x:
                        <input
                        type="number"
                        name="x"
                        onChange={this.handleChange}
                    /></label>
                    <label>
                        y:
                        <input
                            type="number"
                            name="y"
                            onChange={this.handleChange}
                        /></label>
                    <input type="button" value="Submit"  onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}

export  default RoomForm;