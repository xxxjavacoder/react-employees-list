import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilters from '../app-filters/app-filters';
import EmployeesList from "../employees-list/employees-list";
import EmployeesCreateForm from "../employees-create-form/employees-create-form";

import './app.css';

function App() {

    const data = [
        {name: 'Ivan', salary: 1000, increase: true},
        {name: 'Petro', salary: 2000, increase: true},
        {name: 'Semen', salary: 2750, increase: false}
    ];

    return (
        <div className="app">
            <AppInfo />
            
            <div className="search-panel">
                <SearchPanel />
                <AppFilters />
            </div>

            <EmployeesList data={data} />
            <EmployeesCreateForm />
        </div>
    );
}

export default App;
