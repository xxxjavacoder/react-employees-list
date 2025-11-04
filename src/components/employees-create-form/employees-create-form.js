import './employees-create-form.css';

const EmployeesCreateForm = () => {
    return (
        <div className="app-create-form">
            <h3>Add new employee</h3>
            <form className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="What is his/her name?" />
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="Salary in dollars $?" />

                <button type="submit" className="btn btn-outline-light">
                    Add
                </button>
            </form>
        </div>
    )
}

export default EmployeesCreateForm;