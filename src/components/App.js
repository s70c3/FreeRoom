import React, { Component} from 'react';
import '../styles/App.css';

import { Link } from 'react-router'
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
                <div className="menu__item"><Link to="/delete" className="menu-item__link">Удалить аудиторию</Link></div>
            </nav>
            </header>
           {this.props.children}
            <p className="App-intro">
                Добро пожаловать в приложение, показывающие свободные аудитории в главном корпусе университета ИТМО.

            </p>
        </div>
    );
  }
}

export default App;

