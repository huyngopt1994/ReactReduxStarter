import React, {Component} from 'react';
import logo from './logo.svg';
import HelloWorld from './HelloWorld';
import ButtonGroup from "./ButtonGroup";
import './App.css';
import { store } from './store';
// We should create  store associated with a reducer;
// CreateStore will call reducer => reducer(state, action) => state is current state, action will be new state
// initialState is the init state.





class App extends Component {
    render() {
        // We can return a list instead of a div because of functionality of React v16
        return [
            <HelloWorld key={1} tech={store.getState().tech} />,
            <ButtonGroup key={2} technologies={["React", "Elm", "React-Redux"]} />
            ];
    }
}

export default App;
