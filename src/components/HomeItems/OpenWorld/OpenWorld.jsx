import React from 'react';
import { Link } from 'react-router-dom';
import './OpenWorld.css';
import HiCoolImage from '../../../assets/images/hi-cool.svg';
import HiAUImage from '../../../assets/images/how-a-u.svg';
import UnionImage from '../../../assets/images/union.svg';
import CapImage from '../../../assets/images/cap.svg';
import bloodReportImage from '../../../assets/images/blood-report.png';
import trophyImage from '../../../assets/images/trophy.png';
import educationBlocksImage from '../../../assets/images/education-blocks.png';

const Item = ({title, subtitle, img, style}) => {
    return (

        <div className="item">
            <img
                src={img}
                style={style}
                className="item-item-image"
            />
            <div className="item-title">{title}</div>
            <div className="item-subtitle">{subtitle}</div>

        </div>
    )
}

const Items = () => {
    // Предполагается, что изображения импортированы
    // import educationBlocksImage from '...';
    // import bloodReportImage from '...';
    // import trophyImage from '...';

    const ITEMS_DATA = [
        {
            title: "> 700",
            subtitle: "учеников успешно прошли наши курсы и повысили свой уровень английского языка",
            img: educationBlocksImage,
            style: {
                width: "171px",
                height: "126px",
                top: '85px',
                left: '230px'
            }
        },
        {
            title: "на 2–3",
            subtitle: "ступени по шкале CEFR повышают свой уровень английского наши ученики",
            img: bloodReportImage,
            style: {
                width: "171px",
                height: "126px",
                top: '85px',
                left: '220px'
            }
        },
        {
            title: "> 450",
            subtitle: "положительных отзывов от наших учеников",
            img: trophyImage,
            style: {
                width: "171px",
                height: "126px",
                top: '85px',
                left: '230px'
            }
        }
    ];

    return (
        <div className="items">
            {ITEMS_DATA.map((item, index) => (
                <Item
                    key={`item-${index}`}
                    title={item.title}
                    subtitle={item.subtitle}
                    img={item.img}
                    style={item.style}
                />
            ))}
        </div>
    );
};

const OpenWorld = () => {
    return (
        <section className="hero">
            <img
                src={UnionImage}
                className="union-image"
            />
            <div className="hero__content__left">
                <h1 className="hero__title">
                    ОТКРОЙ МИР БЕЗ ГРАНИЦ
                </h1>
                <p className="hero__subtitle">
                    Учи английский язык онлайн с комфортом и результатом!
                </p>

                <Link to={{
                    pathname: "/",
                    hash: "#signup"
                }} className="hero__cta-button">
                    ЗАПИСАТЬСЯ НА ПРОБНОЕ ЗАНЯТИЕ
                </Link>
            </div>
            <img
                src={HiAUImage}
                className="how-a-u-image"
            />
            <img
            src={HiCoolImage}
            className="hi-cool-image"
            />
            <img
                src={CapImage}
                className="cap-image"
            />
            <Items/>
        </section>
    );
};


export default OpenWorld;

