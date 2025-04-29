import './Stages.css';
import React from 'react';
import './Stages.css';
import Stage1 from "../../../assets/images/stage_1.png";
import Stage2 from "../../../assets/images/stage_2.png";
import Stage3 from "../../../assets/images/stage_3.png";
import Stage4 from "../../../assets/images/stage_4.png";


const Stage = ({ title, subtitle, image, textColor, cardColor, size }) => {
    return (
        <div className="stage-card"  style={{
            color: textColor,
            background: cardColor,
            backgroundImage: `url(${image})`,
            backgroundSize: size,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat"
        }}>
            <div className="stage-card__link_to">
                <div className="stage-card__title">
                    {title}
                </div>
                <div className="stage-card__subtitle">
                    {subtitle}
                </div>
            </div>
        </div>
    );
};


const Stages = () => {
    const stages = [
        {
            title: 'Подбираем курс',
            subtitle:"На этом этапе мы определяем, какой курс подходит именно вам, исходя из ваших целей, возраста и уровня подготовки. Мы предлагаем специализированные программы для разных категорий учащихся.",
            textColor: "#2C292F",
            cardColor: "#6AB7FF",
            image: Stage1,
            size: "90%"
        },
        {
            title: 'Выбираем время',
            subtitle:"Мы понимаем, что у каждого ученика свой график, поэтому предлагаем гибкое расписание. Вы можете выбрать удобное для вас время занятий.",
            textColor: "#FFFFFF",
            cardColor: "#4C30C7",
            image: Stage2,
            size: "90%"
        },
        {
            title: 'Ставим цель изучения',
            subtitle:"На этом этапе мы помогаем вам определить, для чего вам нужен английский язык. Это важно для того, чтобы курс был максимально полезным и соответствовал вашим ожиданиям.",
            textColor: "#FFFFFF",
            cardColor: "#4C30C7",
            image: Stage3,
            size: "120%"
        },
        {
            title: 'Начинаем заниматься',
            subtitle:"Занятия проходят индивидуально с преподавателем на удобных платформах, таких как Mirro, Zoom или Skype.",
            textColor: "#2C292F",
            cardColor: "#6AB7FF",
            image: Stage4,
            size: "67%"
        }
    ];
    return (
        <div>
            <div className="stage-title">Этапы</div>
            <div className="stages-container">
                {stages.map((stage, index) => (
                    <Stage
                        key={index}
                        title={stage.title}
                        subtitle={stage.subtitle}
                        image={stage.image}
                        textColor={stage.textColor}
                        cardColor={stage.cardColor}
                        size={stage.size}
                    />
                ))}
            </div>
        </div>
    );
};

export default Stages;

