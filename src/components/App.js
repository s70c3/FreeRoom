import React, { Component} from 'react';
import '../styles/App.css';

import { Link } from 'react-router'
import {Room} from './Room';
class App extends Component {


   render() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>FreeRoom App</h3>
            <nav className="App-menu">
                <div className="menu__item"><Link to="/" className="menu-item__link">Главная</Link></div>
                <div className="menu__item"><Link to="/list" className="menu-item__link">Список</Link></div>
                <div className="menu__item"><Link to="/add" className="menu-item__link">Занять аудиторию</Link></div>
                <div className="menu__item"><Link to="/room" className="menu-item__link">Добавить аудиторию</Link></div>
                <div className="menu__item"><Link to="/stats" className="menu-item__link">Статистика</Link></div>
            </nav>
            </header>
           {this.props.children}
            <p className="App-intro">
                The application try to help you find a free room in Main Campus of ITMO University.
                You can use the map to see enable rooms now or use a list of free room.
                You can occupy room too.
                At same time you can see a stats.
            </p>
        </div>
    );
  }
}

export default App;

