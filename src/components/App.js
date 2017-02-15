import React, { Component} from 'react';
import '../styles/App.css';

import { Link } from 'react-router'
class App extends Component {


   render() {
    return (
        <div className="App">
            <div className="App-header">
                <h2>Welcome to FreeRoom App</h2>
            </div>
            <nav className="App-menu">
                <div className="menu__item"><Link to="/">Главная</Link></div>
                <div className="menu__item"><Link to="/map">Карта</Link></div>
                <div className="menu__item"><Link to="/list">Список</Link></div>
                <div className="menu__item"><Link to="/add">Занять аудиторию</Link></div>
                <div className="menu__item"><Link to="/room">Добавить аудиторию</Link></div>
                <div className="menu__item"><Link to="/stats">Статистика</Link></div>
            </nav>
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

