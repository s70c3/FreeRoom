/**
 * Created by s70c3 on 31.01.17.
 */
import React, {Component} from 'react';
import '../styles/Form.css';
import {connect} from 'react-redux';
import * as roomApi from '../api/roomAPI';


class OccupationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '200',

            date: '',
            startHour: '7',
            startMinute: '0',
            endHour: '7',
            endMinute: '0',
            dayOfWeek: 'понедельник'


        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSelect(event) {
        let index = event.target.selectedIndex;
        console.log( event.target.options[index].value);
        this.setState({[event.target.name]: event.target.options[index].value});
    }

    handleSubmit(e) {
        let occupation = {
            date: this.state.date,
            startHour: this.state.startHour,
            startMinute: this.state.startMinute,
            endHour: this.state.endHour,
            endMinute: this.state.endMinute,
            dayOfWeek: this.state.dayOfWeek

        };
        roomApi.addOccupation(this.state.number, occupation);
        e.preventDefault();
    }

    render() {
        return (
            <div className="Add-container">
                <h3>Занятие</h3>
                <form className="Add-form">
                    <label className="room-form_item"><p>Номер:</p>
                        <input
                            type="number"
                            name="number"
                            onChange={this.handleChange}
                            autoFocus="true"
                        /></label>

                    <label className="room-form_item"><p>День недели:</p>
                        <select name="dayOfWeek" onChange={this.handleSelect}>
                            <option value="понедельник" default="true">понедельник</option>
                            <option value="вторник">вторник</option>
                            <option value="среда">среда</option>
                            <option value="четверг">четверг</option>
                            <option value="пятница">пятница</option>
                            <option value="суббота">суббота</option>
                            <option value="воскресенье">воскресенье</option>
                        </select>
                    </label>
                    <label className="room-form_item"><p>Время начала:</p>
                        <p><input
                            type="number"
                            placeholder="чч"
                            min={7}
                            max={22}
                            className="add__time"
                            name="startHour"
                            onChange={this.handleChange}
                        />
                            <input
                                type="number"
                                placeholder="мм"
                                min={0}
                                max={60}
                                name="startMinute"
                                className="add__time"
                                onChange={this.handleChange}
                            /></p>
                    </label>
                    <label className="room-form_item"><p>Время окончания:</p>
                        <p><input
                            type="number"
                            placeholder="чч"
                            min={7}
                            max={22}
                            name="endHour"
                            className="add__time"

                            onChange={this.handleChange}
                        />
                            <input
                                type="number"
                                placeholder="мм"
                                min={0}
                                max={60}
                                name="endMinute"
                                className="add__time"

                                onChange={this.handleChange}
                            /></p>
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                </form>
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

export default connect(mapStateToProps)(OccupationForm);