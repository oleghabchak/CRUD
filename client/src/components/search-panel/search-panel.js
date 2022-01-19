import  { Component } from 'react'

import './search-panel.css';

class SearchPanel extends Component  {
    constructor(props){
        super(props);
        this.state = {
            tern: ''
        }
    }

    onUpdateSearch = (e) =>{
        const tern = e.target.value;
        this.setState({tern});
        this.props.updateSearch(tern)
    }
    
    render() {
        return (
            <input type="text"
            className="form-control seach-input"
            placeholder="Знайти співробітника"
            value={this.state.tern}
            onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;