import React from 'react';
import ReactDOM from 'react-dom';

import YTSearch  from 'youtube-api-search';
import SearchBar from './components/search_bar';

// Create  a new component. This Component should produce
// Some HTML


// let api_key = process.env.API_KEY;
let api_key = 'AIzaSyAKV7juZoS1D3vxgZ-oyOftnv5Uf1Sfe8M';

YTSearch({key: api_key, term: 'surfboards'}, function(data){
    console.log(data);
});
console.log(api_key)
const App = function () {
    return (<div>
            <SearchBar />
        </div>
    );
}

// Take this Component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.getElementById('root'));

// Add hot module
if (module.hot) {
    module.hot.accept();
}
