import React, { useState, useEffect } from 'react';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './LoginPage.css';
import {useNavigate} from "react-router-dom";


const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const getUsers = () => JSON.parse(localStorage.getItem('users') || '[]');
    const setCurrentUser = (user) => localStorage.setItem('user', JSON.stringify(user));

    const handleSubmit = (e) => {

        e.preventDefault();
        setError('');

        // Общая валидация
        if ((!isLogin && (!name || !login)) || !email || !password) {
            setError('Заполните все обязательные поля');
            return;
        }

        // Валидация для регистрации
        if (!isLogin) {
            if (password !== confirmPassword) {
                setError('Пароли не совпадают');
                return;
            }
            if (password.length < 6) {
                setError('Пароль должен быть не менее 6 символов');
                return;
            }
        }

        const users = getUsers();

        if (isLogin) {
            const user = users.find(u => u.email === email && u.password === password);
            if (!user) {
                setError('Неверный email или пароль');
                return;
            }
            setCurrentUser(user);
            navigate('/test');
        } else {
            if (users.some(u => u.email === email || u.login === login)) {
                setError('Пользователь с таким email или логином уже существует');
                return;
            }

            const newUser = { name, login, email, password };
            localStorage.setItem('users', JSON.stringify([...users, newUser]));
            setCurrentUser(newUser);
            navigate('/test');
        }
    };

    return (
        <div className="login-container">
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <TabButton active={isLogin} onClick={() => setIsLogin(true)}>
                    Вход
                </TabButton>
                <TabButton active={!isLogin} onClick={() => setIsLogin(false)}>
                    Регистрация
                </TabButton>
            </div>

            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <>
                        <InputField
                            label="Имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <InputField
                            label="Логин"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </>
                )}

                <InputField
                    label="E-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputField
                    label="Пароль"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {!isLogin && (
                    <InputField
                        label="Подтвердите пароль"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                )}

                <div style={{ color: 'red', margin: '10px 0', fontSize: '14px' }}>{error}</div>

                <button
                    type="submit"
                    className="login-button"
                    style={{
                        width: '100%',
                        height: '50px',
                        padding: '12px',
                        color: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                >
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </button>
            </form>
        </div>
    );
};

const TabButton = ({ children, active, onClick }) => (
    <button
        className="login-button-tab"
        style={{
            flex: 1,
            border: 'none',
            padding: '12px',
            cursor: 'pointer',
            fontWeight: active ? '700' : '400',
            borderRadius: '4px',

        }}
        onClick={onClick}
    >
        {children}
    </button>
);



const InputField = ({ label, type = 'text', value, onChange, icon }) => {
    return (
        <div className="input-container">
            <label className="input-label">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="input-field"
            />
            {icon && <div className="input-icon">{icon}</div>}
        </div>
    );
};

const LoginPage = () => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Проверяем наличие данных в Local Storage при загрузке компонента
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUserData(parsedUser);
            } catch (error) {
                console.error('Ошибка при чтении данных пользователя:', error);
                localStorage.removeItem('user');
            }
        }
    }, []);


    return (
        <div className="page-container">
            <div className="container">
                <Navbar />
                <AuthForm/>
            </div>
            <Footer />
        </div>

    );
};

export default LoginPage;


