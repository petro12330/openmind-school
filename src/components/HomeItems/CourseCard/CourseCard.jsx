import './CourseCard.css';
import React, {useState} from 'react';
import './CourseCard.css';
import EnglishImage from "../../../assets/images/english-class.svg";
import AbacusImage from "../../../assets/images/abacus.svg";
import SchoolImage from "../../../assets/images/school-bag-2.svg";
import ColorImage from "../../../assets/images/color-palette.svg";
import LinkToIcon from "../../../assets/icons/linkTo.svg";
import LinkToIcon2 from "../../../assets/icons/linkTo2.svg";
import BigCourseImage from "../../../assets/images/big-course-logo.png";
import {useNavigate} from "react-router-dom";

const CourseCard = ({ title, image, link }) => {
    const navigate = useNavigate();
    const [currentIcon, setCurrentIcon] = useState(LinkToIcon);

    // Обработчики событий для наведения и возврата
    const handleMouseEnter = () => {
        setCurrentIcon(LinkToIcon2);
    };

    const handleMouseLeave = () => {
        setCurrentIcon(LinkToIcon);
    };

    return (
        <div className="course-card">
            <div className="course-card__image-container">

            </div>
            <div className="course-card__link_to"
                 onClick={() => navigate(link)}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
                <div className="course-card__subtitle">
                    {title}
                </div>
                <img
                    src={currentIcon}
                    alt="Иконка ссылки"
                    className="course-card__icon"
                />
                <img
                    src={image}
                    alt={title}
                    className="course-card__image"
                    loading="lazy"
                />
            </div>
        </div>
    );
};


const CoursesCards = () => {
    const courses = [
        {
            title: 'Английский для начинающих',
            image: EnglishImage,
            link: '/courses#base'
        },
        {
            title: 'Английский\nдля учебы',
            image: SchoolImage,
            link: '/courses#study'
        },
        {
            title: 'Бизнес-английский',
            image: AbacusImage,
            link: '/courses#business'
        },

        {
            title: 'Английский\n для путешествий',
            image: ColorImage,
            link: '/courses#travel'
        }
    ];
    return (
        <div>
            <div className="course-title">Мы преподаем</div>
            <div className="courses-container">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        title={course.title}
                        image={course.image}
                        link={course.link}
                    />
                ))}
            </div>
            <img
                src={BigCourseImage}
                alt={"Большое лого"}
                className="course-big-logo"
                loading="lazy"
            />
        </div>
    );
};

export default CoursesCards;

