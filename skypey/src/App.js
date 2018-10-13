import React, {Component} from 'react';
import logo from './logo.svg';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sidebar/>
                <Main/>
            </div>
        );
    };
}

export default App;
