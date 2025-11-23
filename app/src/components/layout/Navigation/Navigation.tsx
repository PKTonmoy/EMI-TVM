import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, TrendingUp, BookOpen, PieChart } from 'lucide-react';
import './Navigation.css';

export const Navigation: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    return (
        <nav className="bottom-nav">
            <Link to="/" className={`nav-item ${isActive('/') && location.pathname === '/' ? 'active' : ''}`}>
                <Home className="nav-icon" size={24} />
                <span className="nav-label">Home</span>
            </Link>

            <Link to="/tvm" className={`nav-item ${isActive('/tvm') ? 'active' : ''}`}>
                <TrendingUp className="nav-icon" size={24} />
                <span className="nav-label">TVM</span>
            </Link>

            <Link to="/formulas" className={`nav-item ${isActive('/formulas') ? 'active' : ''}`}>
                <BookOpen className="nav-icon" size={24} />
                <span className="nav-label">Formulas</span>
            </Link>

            <Link to="/breakdown" className={`nav-item ${isActive('/breakdown') ? 'active' : ''}`}>
                <PieChart className="nav-icon" size={24} />
                <span className="nav-label">Breakdown</span>
            </Link>
        </nav>
    );
};
