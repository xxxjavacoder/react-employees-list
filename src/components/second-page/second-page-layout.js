import React from 'react';
import { Link } from 'react-router-dom';
import './second-page-layout.css';

const SecondPageLayout = ({children}) => {
    return (
        <div className="second-page-layout">
            <header className="second-page-header">
                <h2>Second Page Layout Header</h2>
                <nav>
                    <Link to="/">Go back to Main Page</Link>
                </nav>
            </header>
            <main className="second-page-content">
                {children}
            </main>
            <footer className="second-page-footer">
                <p>Second Page Footer Code</p>
            </footer>
        </div>
    );
};

export default SecondPageLayout;
