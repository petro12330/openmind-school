import './Prices.css';
import React, {useEffect} from 'react';
import './Prices.css';
import backgroundPrice from "../../../assets/images/backgroudPrice.png";
import PriceBooks from "../../../assets/images/Pricebooks.png";
import priceGirl1 from "../../../assets/images/girl1.png";
import priceGirl2 from "../../../assets/images/girl2.png";
import PriceHat from "../../../assets/images/PriceHat.png";
import smileLogo from "../../../assets/images/smileLogo3.png";
import {Link, useLocation} from "react-router-dom";


const Price = ({
                   title,
                   subItems,
                   img,
                   titleImage,
                   priceText,
               }) => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    return (
        <div className="price-card-container">
            <div className="price-card" >
                <div className="price-card__title_cart" >
                    <div className="price-card__title">{title}</div>
                    <img className="price-card__image" src={titleImage} alt="Фото"/>
                </div>
                <ul className="features-list">
                    {subItems.map((item, index) => (
                        <li key={index} className="feature-item">
                            <img src={smileLogo} alt="Смайл"/>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="price-price_info">
                    <p className="price-price_info-p">{priceText}<span className="price-price_info_small-p">/урок</span></p>
                    <Link to={{
                        pathname: "/",
                        hash: "#signup"
                    }}>
                        <div className="price-price_info_btn">
                            Записаться на пробное занятие
                        </div>
                    </Link>

                    <div className="price-price_info_wrap_img">
                        <img src={img} className={"price-price_info_img"} alt="Фото"/>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Prices = () => {
    const prices = [
        {
            title: 'Английский для детей',
            subItems: [
                "Индивидуальные занятия с учетом возраста и интересов ребенка",
                "Игровой формат обучения для легкого усвоения материала",
                "Поддержка преподавателя и регулярная обратная связь для родителей",
                "Длительность одного занятия составляет 40 минут"
            ],
            img: priceGirl1,
            titleImage: PriceBooks,
            priceText: "от 800 ₽"
        },
        {
            title: 'Английский для взрослых',
            subItems: [
                "Индивидуальный подход к вашим целям: работа, учеба, путешествия",
                "Гибкое расписание — занимайтесь в удобное для вас время",
                "Практика разговорного с первого занятия",
                "Длительность одного занятия составляет 40 минут"
            ],
            img: priceGirl2,
            titleImage: PriceHat,
            priceText: "от 950 ₽"
        },
    ];
    return (
        <div>
            <div className="price-title">СТОИМОСТЬ ОБУЧЕНИЯ</div>
            <div className="prices-container" style={{
                backgroundImage: `url(${backgroundPrice})`,
                backgroundPosition: "center",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
            }}>
                {prices.map((price, index) => (
                    <Price
                        key={index}
                        title={price.title}
                        subItems={price.subItems}
                        img={price.img}
                        titleImage={price.titleImage}
                        priceText={price.priceText}
                    />
                ))}
            </div>
        </div>
    );
};

export default Prices;

