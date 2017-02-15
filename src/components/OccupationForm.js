/**
 * Created by s70c3 on 31.01.17.
 */
import React, { Component } from 'react';
import '../styles/form.css';

import * as roomApi from '../api/roomAPI';


class OccupationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '200',

                date:'',
                startHour: '7',
                startMinute: '0',
                endHour: '7',
                endMinute: '0',
                dayOfWeek: '1'



        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

        if (event.target.name === 'dayOfWeek') {
            this.setState({dayOfWeek: event.target.value});
        }

        if (event.target.name === 'startHour') {
            this.setState({startHour: event.target.value});
        }

        if (event.target.name === 'endHour') {
            this.setState({endHour: event.target.value});
        }
        if (event.target.name === 'endMinute') {
            this.setState({endMinute: event.target.value});
        }
        if (event.target.name === 'startMinute') {
            this.setState({ startMinute: event.target.value});
        }
       else
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit() {
        var occupation = {
            date: this.state.date,
            startHour: this.state.startHour,
            startMinute: this.state.startMinute,
            endHour: this.state.endHour,
            endMinute: this.state.endMinute,
            dayOfWeek: this.state.dayOfWeek

        }
        roomApi.addOccupation(this.state.number, occupation);
    }
    render() {
        return (
            <div className="Add-container">
                <form className="Add-form">
                    <label>Номер:
                        <input
                            type="number"
                            name="number"
                            onChange={this.handleChange}
                        /></label>
                    <label>
                        Дата:
                        <input type="date" name="date"></input></label>
                    <p>или</p>
                    <label>День недели:
                        <input type="number"
                               name="dayOfWeek"
                               min={1}
                               max={7}
                               onChange={this.handleChange}
                    ></input></label>
                    <label>Время начала:
                        <input
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
                        />
                    </label>
                    <label>Время окончания:
                        <input
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
                        />
                    </label>
                    <input type="button" value="Submit"  onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}

export  default OccupationForm;