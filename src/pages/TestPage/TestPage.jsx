import React, {useEffect, useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import OpenWorld from "../../components/HomeItems/OpenWorld/OpenWorld";
import './TestPage.css';

import Back from "../../assets/images/backkkk.png";
import Footer from "../../components/Footer/Footer";
import TopItem from "../../components/TopItem/TopItem";
import Test from "../../components/Test/Test";
import {useNavigate} from "react-router-dom";


const NeedReg = () => {
    const navigate = useNavigate();

    return (
        <div className="top-item-container2" style={{backgroundImage: `url(${Back})`}}>
            <div className="top-item-title2">
                упс
            </div>
            <div className="top-item-subtitle2">
                Кажется, вы ещё не в нашем клубе знатоков английского!
                Чтобы пройти тест и доказать, что вы — настоящий гуру языка Шекспира и Тейлор Свифт, нужно сделать первый шаг — зарегистрироваться.
                Нажмите на кнопку ниже и начните своё языковое приключение прямо сейчас!
            </div>
            <div className="reg_btn" onClick={() => {navigate("/login")}}>
                зарегистрироваться
            </div>
        </div>
    );
};


const TestPage = () => {

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
                {userData ? <Test/>:
                    <div>
                        <TopItem title="Проверьте свой уровень английского" subtitle="Проверьте свои знания английского языка! Выберите правильный ответ на каждый вопрос." />
                        <NeedReg/>
                    </div>
                }
            </div>

            <Footer />
        </div>

    );
};

export default TestPage;


