import React, {Component} from 'react';
import '../styles/App.css';

import {Link} from 'react-router'
import {HotKeys} from 'react-hotkeys';
import  {browserHistory} from  'react-router';
class App extends Component {


    keyMap = {
        'main': ['ctrl+h'],
        'add': ['ctrl+n'],
        'delete': ['ctrl+r'],
        'list': ['ctrl+l'],
        'occupy': ['ctrl+o']

    };

    handlers = {
        'main': (event) => browserHistory.push('/'),
        'add': (event) => browserHistory.push('/room'),
        'occupy': (event) => browserHistory.push('/add'),
        'list': (event) => browserHistory.push('/list'),
        'delete': (event) => browserHistory.push('/delete')

    };

    render() {

        return (
            <HotKeys keyMap={this.keyMap} handlers={this.handlers}>
                <div className="App">

                    <header className="App-header">
                        <h3>FreeRoom App</h3>
                        <nav className="App-menu">
                            <div className="menu__item"><Link to="/" className="menu-item__link">Главная</Link></div>
                            <div className="menu__item"><Link to="/list" className="menu-item__link">Список</Link></div>
                            <div className="menu__item"><Link to="/add" className="menu-item__link">Занять
                                аудиторию</Link>
                            </div>
                            <div className="menu__item"><Link to="/room" className="menu-item__link">Добавить
                                аудиторию</Link></div>
                            <div className="menu__item"><Link to="/stats" className="menu-item__link">Статистика</Link>
                            </div>
                            <div className="menu__item"><Link to="/delete" className="menu-item__link">Удалить
                                аудиторию</Link></div>
                        </nav>
                    </header>
                    {this.props.children}

                    <footer>
                    <p className="intro">
                       FreeRoom - приложение, показывающие свободные аудитории в главном корпусе университета
                        ИТМО. Добавьте аудиторию на карту и займите её!
                    </p>

                    <div className="tip">
                        <p>Подсказка: между экранами можно перемещаться с помощью горячих клавищ.</p>
                        <ul>
                            <li> ctrl+h - главная страница</li>
                            <li>ctrl+o - занять аудиторию</li>
                            <li>ctrl+n - добавить аудиторию</li>
                            <li>ctrl+l - список аудиторий</li>
                        </ul>
                    </div>
                    </footer>
                </div>
            </HotKeys>
        );
    }
}

export default App;

