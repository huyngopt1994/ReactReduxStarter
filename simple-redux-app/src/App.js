import React, {Component} from 'react';
import logo from './logo.svg';
import HelloWorld from './HelloWorld';
import reducer from "./reducers";
import {createStore} from 'redux';
import './App.css';

// We should create  store associated with a reducer;
// CreateStore will call reducer => reducer(state, action) => state is current state, action will be new state
// initialState is the init state.

const initialState = {tech: "React"};

const store = createStore(reducer, initialState);


class App extends Component {
    render() {
        return (
            <HelloWorld tech={store.getState().tech}/>
        );
    }
}

export default App;
