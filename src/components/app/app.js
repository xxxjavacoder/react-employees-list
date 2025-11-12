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
                {name: 'Ivan', salary: 1000, increase: true, like: false, id: 1},
                {name: 'Petro', salary: 2000, increase: true, like: false, id: 2},
                {name: 'Semen', salary: 2750, increase: false, like: true, id: 3}
            ],
            term: '',
            filter: 'all'
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
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    toggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(item => item.id === id);
        //
        //     const old = data[index];
        //     const newItem = {...old, [prop]: !old[prop]};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //     return {
        //         data: newArr
        //     }
        // });

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    searchEmp = (data, term) => {
        if (term.length === 0) {
            return data;
        } else {
            return data.filter(item => item.name.indexOf(term) > -1);
        }
    }

    onUpdateTerm = (term) => {
        this.setState({term});
    }

    onFilterChange = (data, filter) => {
        if (filter === 'like') {
            return data.filter(item => item.like);
        } else if (filter === 'salary') {
            return data.filter(item => item.salary >= 1000);
        } else if (filter === 'all') {
             return data;
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const visibleData = this.searchEmp(this.onFilterChange(this.state.data, this.state.filter), this.state.term);
        return (
            <div className="app">
                <AppInfo empCount={this.state.data.length} increaseCount={this.state.data.filter(item => item.increase).length} />

                <div className="search-panel">
                    <SearchPanel onUpdateTerm={this.onUpdateTerm}/>
                    <AppFilters filter={this.state.filter} onUpdateFilter={this.onUpdateFilter} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.toggleProp}
                />
                <EmployeesCreateForm onAdd={this.addNewItem} />
            </div>
        );
    }
}

export default App;
