import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import LoginIcon from '../../assets/icons/login-icon.svg';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = () => {
        const storedUser = localStorage.getItem('user');
        setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    const handleAuthClick = () => {
        if (user) {
            // Логаут
            localStorage.removeItem('user');
            setUser(null);
            navigate('/');
        } else {
            // Переход на страницу входа
            navigate('/login');
        }
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logo">
                <span className="navbar__logo-openmind">OpenMind</span>
                <span className="navbar__logo-school">School</span>
            </Link>

            <div className="navbar__center">
                <Link to="/" className="navbar__link">ГЛАВНАЯ</Link>
                <Link to="/courses" className="navbar__link">КУРСЫ</Link>
                <Link to="/test" className="navbar__link">ТЕСТЫ</Link>
            </div>

            <button
                onClick={handleAuthClick}
                className="navbar__login"
            >
                <img src={LoginIcon} alt="ИКОНКА ВХОДА" />
                {user ? user.login : 'ВХОД'}
            </button>
        </nav>
    );
};

export default Navbar;