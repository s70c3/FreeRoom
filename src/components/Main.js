/**
 * Created by s70c3 on 14.02.17.
 */
import React, { Component } from 'react';
import '../styles/Form.css';
import {connect} from 'react-redux';
import * as roomApi from '../api/roomAPI';


class Main extends Component {
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

            this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit() {
        var dateTotal = {
            date : this.state.date,
            weekDay : this.state.weekDay,
           hour: this.state.hour,
            minute : this.state.minute

        }
        roomApi.setDate(dateTotal);
    }

    render() {
        var dateString = "";
        if(this.props.dateTotal.hour === undefined) {
            var date = new Date();
                dateString=date.getDay()+" "+date.getHours()+":"+date.getMinutes();
        }
        else {
            console.log('pumpurum');
            dateString = this.props.dateTotal.date+" "+ this.props.dateTotal.weekDay+ " "+ this.props.dateTotal.hour+ ":"+this.props.dateTotal.minute;
        }
        return (
            <div className="Add-container">
                <p> Запрошенное время: {dateString}</p>
                <form className="Add-form">
                        <label className="room-form_item">
                            <p>Дата:</p>
                            <input type="date" name="date" /></label>
                        <p>или</p>
                        <label className="room-form_item"><p>День недели:</p>
                            <select type="number"
                                   name="weekDay"
                                   onChange={this.handleChange}
                            >
                             <option value="понедельник">понедельник</option>
                                <option value={"вторник"}>вторник</option>
                                <option value="среда">среда</option>
                                <option value="четверг" >четверг</option>
                                <option value="пятница">пятница</option>
                                <option value="суббота" >суббота</option>
                                <option value="воскресенье">воскресенье</option>
                            </select></label>
                    <label className="room-form_item"><p>Время начала:</p>
                        <p>  <input
                            type="number"
                            placeholder="чч"
                            min={7}
                            max={22}
                            className="add__time"
                            name="hour"
                            onChange={this.handleChange}
                            required="true"
                        />
                            <input
                                type="number"
                                placeholder="мм"
                                min={0}
                                max={60}
                                name="minute"
                                className="add__time"
                                onChange={this.handleChange}
                                required="true"
                            /></p>
                    </label>
                    <input type="button" value="Submit"  onClick={this.handleSubmit} />
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

export default connect(mapStateToProps)(Main);
