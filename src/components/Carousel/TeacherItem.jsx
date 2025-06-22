import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Carousel.css';
import LeftIcon from '../../assets/icons/left_btn.svg';
import RightIcon from '../../assets/icons/right_btn.svg';


const TeacherItem = ({
                          title,
                          subtitle,
                          subtitle2,
                          image,
                          textColor,
                          cardColor,
                          size
                      }) => {
    return (
        <div className="teacher-card">
            <div className="teacher-container">
                <img src={image} className="teacher-card__img" alt='photo'>
                </img>
                <div className="teacher-card__title">
                    {title}
                </div>
                <div className="teacher-card__data">
                    {subtitle}
                </div>
                <div className="teacher-card__data2">
                    {subtitle2}
                </div>

            </div>

            {/*<div className="stage-card__link_to">*/}

            {/*    <div className="stage-card__subtitle">*/}
            {/*        {subtitle}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<img className="stage-card__img" src={image} alt="Иконка ссылки" />*/}

        </div>
    );
};

export default TeacherItem;
