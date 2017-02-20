/**
 * Created by s70c3 on 14.02.17.
 */
import React, { Component } from 'react';
import '../styles/Form.css';
import {connect} from 'react-redux';
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

    handleSubmit(e) {
        roomApi.addRoom(this.state.number,this.state.x, this.state.y, false);
        e.preventDefault();
    }
    render() {
        return (
            <div className="Add-container">
                <h3>Добавление</h3>
                <form className="room-form">
                    <label className="room-form_item"><p>Номер:</p>
                        <input
                            type="number"
                            name="number"
                            onChange={this.handleChange}
                        /></label>
                    <p>Координаты:</p>
                    <label className="room-form_item">
                        <p>x:</p>
                        <input
                        type="number"
                        name="x"
                        onChange={this.handleChange}
                    /></label>
                    <label className="room-form_item">
                        <p>y:</p>
                        <input
                            type="number"
                            name="y"
                            onChange={this.handleChange}
                        /></label>
                    <input type="submit" value="Добавить"  onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}


const mapStateToProps = function (store) {
    return {
        rooms: store.roomState.rooms
    };
};

export default connect(mapStateToProps)(RoomForm);
/*export  default RoomForm;*/