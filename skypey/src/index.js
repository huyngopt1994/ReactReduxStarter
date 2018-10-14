import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const fancy_log = () => {
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
    console.log(store.getState());
};
const render = () => {
    fancy_log();
    ReactDOM.render(<App/>, document.getElementById('root'));
};

store.subscribe(render); //Make sure when store changing some thing it will rerender
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
