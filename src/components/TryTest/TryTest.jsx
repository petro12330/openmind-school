import React from 'react';
import './TryTest.css';
import {useNavigate} from "react-router-dom";

const TryTest = () => {
    const navigate = useNavigate();

    return (
        <div className="try-test-container">
            <div className="try-test-title">
                Узнайте свой уровень английского за 5 минут!
            </div>
            <div className="try-test-subtitle">
                Хотите начать учить английский, но не знаете, с чего начать? Пройдите наш бесплатный тест и узнайте свой уровень языка всего за несколько минут!
            </div>
            <div className="try-test-btn" onClick={() => {navigate('/test')}}>
                пройти тест
            </div>
        </div>
    );
};


export default TryTest;

