import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: 'Init Value'};
    }

    render() {

        return (<div>
                <input type="text"  value={this.state.term} onChange={event => this.setState({term: event.target.value})}/>
                <p>The new value is {this.state.term}</p>
            </div>

        );
    }

};

export default SearchBar;
