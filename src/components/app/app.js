import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilters from '../app-filters/app-filters';
import EmployeesList from "../employees-list/employees-list";
import EmployeesCreateForm from "../employees-create-form/employees-create-form";

import './app.css';

function App() {
    return (
        <div className="app">
            <AppInfo />
            
            <div className="search-panel">
                <SearchPanel />
                <AppFilters />
            </div>

            <EmployeesList />
            <EmployeesCreateForm />
        </div>
    );
}

export default App;
