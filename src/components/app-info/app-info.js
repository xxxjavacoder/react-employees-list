import './app-info.css';

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Employees information</h1>
            <h2>Count of employees: {props.empCount}</h2>
            <h2>Bonus get's {props.increaseCount} of employees!</h2>
        </div>
    )
}

export default AppInfo;
