/**
 * Created by s70c3 on 31.01.17.
 */
import React, { Component } from 'react';
import '../styles/AddPage.css';


class AddPage extends Component {
    render() {
        return (
            <div className="Add-container">
                <form className="Add-form">
                    <label>Номер:
                        <input
                            type="number"
                            defaultValue='200'
                            ref='number'
                        /></label>
                    <label>
                        Дата:
                        <input type="date"></input></label>
                    <p>или</p>
                    <label>День недели: <input type="number"></input></label>
                    <label>Время начала:
                        <input
                            type="number"
                            placeholder="чч"
                            min={7}
                            max={22}
                            ref="startHour"
                            className="add__time"
                            />
                        <input
                            type="number"
                            placeholder="мм"
                            min={0}
                            max={60}
                            ref="startMinute"
                            className="add__time"
                        />
                    </label>
                    <label>Время окончания:
                        <input
                            type="number"
                            placeholder="чч"
                            min={7}
                            max={22}
                            ref="endHour"
                            className="add__time"
                        />
                        <input
                            type="number"
                            placeholder="мм"
                            min={0}
                            max={60}
                            ref="endMinute"
                            className="add__time"
                        />
                    </label>
                    <button
                        type="submit"
                        className='add__btn'
                        onClick={this.onBtnClickHandler}
                        ref='alert_button'>
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export  default AddPage;