import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import EmployeesPage from '../employees-page/employees-page';
import SecondPage from '../second-page/second-page';

import './app.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Routes>
                        <Route path="/" element={<EmployeesPage />} />
                        <Route path="/second-page" element={<SecondPage />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
