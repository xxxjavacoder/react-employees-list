import React from 'react';

import './employees-create-form.css';

class EmployeesCreateForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render(){
        const {name, salary} = this.state;

        return (
            <div className="app-create-form">
                <h3>Add new employee</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input type="text"
                           name="name"
                           value={name}
                           className="form-control new-post-label"
                           placeholder="What is his/her name?"
                            onChange={this.onValueChange}
                    />
                    <input type="number"
                           name="salary"
                           value={salary}
                           className="form-control new-post-label"
                           placeholder="Salary in dollars $?"
                            onChange={this.onValueChange}
                    />

                    <button type="submit" className="btn btn-outline-light">
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesCreateForm;