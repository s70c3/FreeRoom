/**
 * Created by s70c3 on 19.02.17.
 */
/**
 * Created by s70c3 on 14.02.17.
 */
import React, { Component } from 'react';
import '../styles/Form.css';
import {connect} from 'react-redux';
import * as roomApi from '../api/roomAPI';


class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '200',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit() {
        roomApi.deleteRoom(this.state.number);
    }
    render() {
        return (
            <div className="Add-container">
                <form className="room-form">
                    <label className="room-form_item"><p>Номер:</p>
                        <input
                            type="number"
                            name="number"
                            onChange={this.handleChange}
                        /></label>

                    <input type="button" value="Удалить"  onClick={this.handleSubmit} />
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

export default connect(mapStateToProps)(Delete);
