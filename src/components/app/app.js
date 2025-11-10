import React from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilters from '../app-filters/app-filters';
import EmployeesList from "../employees-list/employees-list";
import EmployeesCreateForm from "../employees-create-form/employees-create-form";

import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Ivan', salary: 1000, increase: true, id: 1},
                {name: 'Petro', salary: 2000, increase: true, id: 2},
                {name: 'Semen', salary: 2750, increase: false, id: 3}
            ]
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }));
    }

    addNewItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilters />
                </div>

                <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
                <EmployeesCreateForm onAdd={this.addNewItem} />
            </div>
        );
    }
}

export default App;
