import React, {useEffect, useState} from 'react';
import './StartStudy.css';
import {useLocation} from "react-router-dom";
import CentralIcon from "../../assets/icons/close.svg";
import CloseIcon from "../../assets/icons/close2.svg";


const StartStudy = ({img}) => {
    const { hash } = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <section id="signup">
            <div className="start-study_base-container">
                <div className="start-study-left">
                    <span className="start-study_base-title">
                        Хотите начать заниматься?
                    </span>
                    <span className="start-study_base-subtitle">
                    Запишитесь на пробное занятие и получите индивидуальный план вашего обучения
                    </span>
                        <form className="registration-form">
                            <div className="form-group">
                                <input type="text" placeholder="Имя" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Телефон" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Какой курс вы хотите изучать?" required />
                            </div>

                            <button type="submit" onClick={toggleModal} className="submit-button">
                                ЗАПИСАТЬСЯ НА ПРОБНОЕ ЗАНЯТИЕ
                            </button>
                        </form>
                </div>
                <div className="start-study-right">
                    <img src={img} className="start-study-right-img" alt="Фото"/>
                </div>
                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            {/* Кнопка закрытия */}
                            <img
                                src={CloseIcon}
                                className="close-button"
                                alt="Закрыть"
                                onClick={toggleModal}
                            />
                            {/* Центральное лого */}
                            <div className="logo-container">
                                <img
                                    src={CentralIcon}
                                    className="center-logo"
                                    alt="Логотип"
                                />
                            </div>
                            {/* Текст под лого */}
                            <div className="modal-text">
                                Заявка успешно отправлена!<br/>
                                Скоро мы с вами свяжемся
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>

    );
};


export default StartStudy;

