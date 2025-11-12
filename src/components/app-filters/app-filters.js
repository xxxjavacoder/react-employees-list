import React from 'react';

const AppFilters = (props) =>{
    const buttonsArr = [
        {label: 'All employees', name: 'all'},
        {label: 'Best employees', name: 'like'},
        {label: 'Salary 1000+', name: 'salary'}
    ]

    const buttons = buttonsArr.map(({label, name}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
         return (
             <button
                key={name}
                type="button"
                className={`btn ${clazz}`}
                onClick={() => props.onUpdateFilter(name)}
             >
                {label}
            </button>
         )
    });

    console.log(buttons);

    return (
        <div className="btn-group mt-3">
            {buttons}
        </div>
    )
}

export default AppFilters;
