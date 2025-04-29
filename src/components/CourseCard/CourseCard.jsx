import React, {useEffect} from 'react';
import './CourseCard.css';
import Rectangle1Image from '../../assets/images/Rectangle 39878.png';
import Rectangle2Image from '../../assets/images/Rectangle 39879.png';
import Rectangle3Image from '../../assets/images/Rectangle 39888.png';
import Rectangle4Image from '../../assets/images/Rectangle 398799.png';
import {useLocation} from "react-router-dom";


const CourseCard = ({id, title, subtitle, subtitle2, descriptionItems, img}) => {
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
        <div id={id} className="course-card-container">
            <div className="course-card-container-left">
                <div className="course-card-title">
                    {title}
                </div>
                <div className="course-card-subtitle">
                    {subtitle}
                </div>
                <div className="course-card-subtitle2">
                    {subtitle2}
                </div>
                <div className="course-card-descriptionItems">
                    {
                        descriptionItems.map((item, index) => (
                            <div className="course-card-descriptionItem" key={index}>
                                {descriptionItems[index]}
                            </div>
                        ))
                    }
                </div>
            </div>
            <img className="course-card-img" src={img} />
        </div>
    );
};



const CoursesCards = () => {
    const courses = [
        {
            'id': 'base',
            'title': "базовый Английский",
            'subtitle': "Идеальный курс для тех, кто только начинает изучать английский язык. Вы освоите базовую грамматику, научитесь строить простые предложения и сможете общаться на повседневные темы. Мы поможем вам заложить фундамент для дальнейшего изучения языка.",
            'subtitle2': "Необходимый уровень английского языка для этого курса: от A2 (от уровня ниже среднего)",
            'descriptionItems': [
                "Поймешь тексты любимых песен и наконец узнаешь, о чем они",
                "Сможешь читать вывески и не пропустить нужный автобус",
                "Будешь читать книги зарубежных авторов в оригинале",
                "Прокачаешь свои навыки и начнешь понимать мемы без перевода"
            ],
            "img": Rectangle1Image
        },
        {
            'id': 'travel',
            'title': "Английский для путешествий",
            'subtitle': "Собираетесь в путешествие? Этот курс поможет вам чувствовать себя уверенно в любой стране. Вы научитесь легко общаться в аэропорту, отеле, ресторане и других типичных ситуациях. Мы разберем полезные фразы и выражения, которые сделают вашу поездку комфортной",
            'subtitle2': "Необходимый уровень английского языка для этого курса: от A2 (от уровня ниже среднего)",
            'descriptionItems': [
                "Перестанешь бояться потеряться в аэропорту",
                "Сможешь читать вывески и не пропустить нужный автобус",
                "Начнешь чувствовать себя уверенно в любой стране",
                "Поймешь меню и не закажешь случайно острое блюдо."
            ],
            "img": Rectangle2Image
        },
        {
            'id': 'business',
            'title': "Бизнес-английский",
            'subtitle': "Курс для тех, кто хочет использовать английский в профессиональной среде. Вы научитесь вести деловую переписку, проводить презентации, участвовать в переговорах и собеседованиях. Мы поможем  вам повысить уровень языка для карьерного роста и международного общения.",
            'subtitle2': "Необходимый уровень английского языка для этого курса: от A2 (от уровня ниже среднего)",
            'descriptionItems': [
                "Сможешь понимать бизнес-термины и не путать revenue с profit",
                "Сможешь презентовать проект так, чтобы все сказали 'Wow!'",
                "Сможешь вести переговоры с иностранными партнерами без переводчика",
                "Научишься обсуждать KPI и ROI без словаря"
            ],
            "img": Rectangle3Image
        },
        {
            'id': 'study',
            'title': "Английский для учебы",
            'subtitle': "Этот курс предназначен для студентов и школьников, которые хотят улучшить свои знания английского для успешной учебы. Мы поможем вам подготовиться к экзаменам, научиться писать эссе и понимать академические тексты. Вы сможете уверенно использовать английский в образовательных целях.",
            'subtitle2': "Необходимый уровень английского языка для этого курса: от A2 (от уровня ниже среднего)",
            'descriptionItems': [
                "Сможешь сдать ЕГЭ по английскому на максимум",
                "Сможешь сдать IELTS или TOEFL на нужный балл без стресса",
                "Перестанешь путать Present Perfect и Past Simple на экзаменах",
                "Сможешь поступить в зарубежный вуз и учиться на английском"
            ],
            "img": Rectangle4Image
        }
    ]
    return (
        <div className="courses-cards">
            {courses.map((course, i) => {
                return (
                    <CourseCard
                        id={course.id}
                        key={i}
                        title={course.title}
                        subtitle={course.subtitle}
                        subtitle2={course.subtitle2}
                        descriptionItems={course.descriptionItems}
                        img={course.img}
                    />)
            })}
        </div>
    )
}

export default CoursesCards;

