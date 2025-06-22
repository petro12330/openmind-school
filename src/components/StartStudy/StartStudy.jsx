import React, {useEffect, useState} from 'react';
import './StartStudy.css';
import {useLocation} from "react-router-dom";
import CentralIcon from "../../assets/icons/close.svg";
import CloseIcon from "../../assets/icons/close2.svg";

const StartStudy = ({img}) => {
    const { hash } = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        course: ''
    });

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            toggleModal();
        }
    };

    const isFormValid = () => {
        return formData.name && formData.phone && formData.email && formData.course;
    };

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
                    <form className="registration-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Имя"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Телефон"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="course"
                                placeholder="Какой курс вы хотите изучать?"
                                required
                                value={formData.course}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="submit-button"
                            disabled={!isFormValid()}
                        >
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