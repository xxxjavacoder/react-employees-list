import React from 'react';
import './search-panel.css';

class SearchPanel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateValue = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateTerm(term);
    }

    render() {
        return <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
            value={this.state.term}
            onChange={this.onUpdateValue}
        />
    }
}

export default SearchPanel;