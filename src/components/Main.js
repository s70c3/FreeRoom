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


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        this.state = {
            date: '',
            hour: '',
            minute: '',
            weekDay: 'понедельник'

        };

        let date = new Date();
        let dateTotal = {
            date : date,
            hour:  date.getHours(),
            minute : date.getMinutes(),
            weekDay : this.getDayName(date.getDay())

        };
        roomApi.setDate(dateTotal);
    }

    handleChange(event) {
            this.setState({[event.target.name] : event.target.value});
    }
    handleSelect(event) {
        let index = event.target.selectedIndex;
        this.setState({[event.target.name] : event.target.options[index].value});
    }
    handleSubmit() {
        let dateTotal = {
            date : this.state.date,
            hour: this.state.hour,
            minute : this.state.minute,
            weekDay : this.state.weekDay

        }
        roomApi.setDate(dateTotal);
    }

    getDayName(number) {
        let names = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота' ];
        return names[number];
    }

    render() {

         let dateString = this.props.dateTotal.date+" "+ this.props.dateTotal.weekDay+ " "+ this.props.dateTotal.hour+ ":"+this.props.dateTotal.minute;
        return (
            <div className="Add-container">
                <p> Запрошенное время: {dateString}</p>
                <form className="Add-form">

                        <label className="room-form_item"><p>День недели:</p>
                            <select type="number"
                                   name="weekDay"
                                   onChange={this.handleSelect}
                            >
                             <option value="понедельник"
                             default="true">понедельник</option>
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
