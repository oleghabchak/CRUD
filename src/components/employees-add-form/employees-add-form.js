import React, { Component } from 'react'

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
    super(props);
    this.state ={
       name:'',
       salary: 0
    }
}

onValueChange = (e) => {
    this.setState({
        
    })
}

    render() {
        return (
            <div className="app-add-form">
                <h3>Додати нового працівника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Як його звати?" 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                    onClick={alert}
                            className="btn btn-outline-light">Добавити</button>
                </form>
            </div>
        )
    }

}

export default EmployeesAddForm;