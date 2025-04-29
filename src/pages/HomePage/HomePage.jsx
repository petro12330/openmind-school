import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import OpenWorld from "../../components/HomeItems/OpenWorld/OpenWorld";
import './StudyPart.css';
import CoursesCards from "../../components/HomeItems/CourseCard/CourseCard";
import startStudy1 from '../../assets/images/startStudy1.png';
import teacher1 from '../../assets/images/teacher1.png';
import teacher2 from '../../assets/images/teacher2.png';
import teacher3 from '../../assets/images/Group 1000002461 (1).png';
import teacher4 from '../../assets/images/Group 1000002462 (3).png';
import Stages from "../../components/HomeItems/Stages/Stages";
import Prices from "../../components/HomeItems/Prices/Prices";
import StartStudy from "../../components/StartStudy/StartStudy";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import TryTest from "../../components/TryTest/TryTest";
import TeacherItem from "../../components/Carousel/TeacherItem";
import ReviewItem from "../../components/Carousel/ReviewItem";
import rewImg1 from '../../assets/images/Ellipse 59.png';
import rewImg2 from '../../assets/images/Ellipse 60 (1).png';
import rewImg3 from '../../assets/images/Ellipse 60.png';
import rewImg4 from '../../assets/images/Ellipse 59 (1).png';

const HomePage = () => {
    return (
        <div className="page-container">
            <div className="container">
                <Navbar/>

                <OpenWorld/>
                <CoursesCards/>
                <Stages/>
                <Prices/>
                <StartStudy img={startStudy1}/>
                <Carousel items={
                    [
                        {
                            "title": "Павел",
                            "image": teacher1,
                            "textColor": "#2C292F",
                            "cardColor": "#6AB7FF",
                            "size": "60%",
                            "subtitle": "Высококвалифицированный\n преподаватель.Он имеет степень\nмагистра в области лингвистики.\nПавел создает структурированные\nуроки, которые помогут вам освоить\nанглийский язык на глубоком уровне. ",
                            "subtitle2": "Преподает 7 лет"
                        },
                        {
                            "title": "Алена",
                            "image": teacher2,
                            "textColor": "#2C292F",
                            "cardColor": "#6AB7FF",
                            "size": "60%",
                            "subtitle": "Опытный преподаватель английского\nязыка. Алена специализируется на\nразговорном английском и подготовке\nк международным экзаменам. Ее уроки\nполны интерактивных заданий и веселых\nупражнений, ее подход помогает\nэффективно учить английский язык.",
                            "subtitle2": "Преподает 4 лет"
                        },
                        {
                            "title": "Андрей",
                            "image": teacher3,
                            "textColor": "#2C292F",
                            "cardColor": "#6AB7FF",
                            "size": "60%",
                            "subtitle": "Креативный преподаватель, который\nиспользует современные технологии\nи онлайн-ресурсы для обучения\nанглийскому языку. Он активно применяет\nразличные приложения и интерактивные\nплатформы, чтобы сделать процесс\nобучения более увлекательным.",
                            "subtitle2": "Преподает 5 лет"
                        },
                        {
                            "title": "София",
                            "image": teacher4,
                            "textColor": "#2C292F",
                            "cardColor": "#6AB7FF",
                            "size": "60%",
                            "subtitle": "Дипломированный преподаватель с большим\n опытом работы с детьми и подростками. Она\nзнает, как сделать обучение увлекательным\nи эффективным, используя игры и творческие\nзадания. Ее позитивный настрой и подход\nк обучению вдохновляют учеников на успех.",
                            "subtitle2": "Преподает 6 лет"
                        },
                    ]
                }
                          renderItem={
                              (item) => (
                                  <TeacherItem
                                      title={item.title}
                                      subtitle={item.subtitle}
                                      subtitle2={item.subtitle2}
                                      image={item.image}
                                      textColor={item.textColor}
                                      cardColor={item.cardColor}
                                      size={item.size}
                                  ></TeacherItem>
                              )
                          }
                />
                <TryTest/>
                <Carousel
                    title={"отзывы"}
                    items={
                        [
                            {
                                "title": "Руслан",
                                'age': "21 год",
                                "image": rewImg1,
                                "subtitle": "Школа просто супер! Я долго искал\nподходящее место, где мог бы изучать\nанглийский с профессионалами, и нашел\nименно здесь. Занятия проводятся в удобной\nонлайн-формате, что экономит время. Я уже\nвижу прогресс в своих навыках, и это вселяет\nв меня уверенность. Спасибо команде!",
                                "pointsCorStart": {"top":"150", "left":'50'},
                                "pointsCorEnd": {"top":'290', "left":'425'}
                            },
                            {
                                "title": "Анна",
                                'age': "18 лет",
                                "image": rewImg2,
                                "subtitle": "Я выбрала эту школу для изучения\nанглийского языка, и ни разу не пожалела!\nУроки проходят в удобное время, \nи преподаватели всегда готовы помочь. \nМой уровень языка значительно повысился\n, благодаря индивидуальному подходу \nи интересным, познавательным занятиям.",
                                "pointsCorStart": {"top":"150", "left":'50'},
                                "pointsCorEnd": {"top":'290', "left":'452'}
                            },
                            {
                                "title": "Кирилл",
                                'age': "30 лет",
                                "image": rewImg4,
                                "subtitle": "Преподаватели квалифицированные и\n профессиональные, они умеют находить\n общий язык с учениками и делают занятия\nмаксимально интересными. Я чувствую,\nчто мои навыки значительно улучшились,\nи с нетерпением жду новых уроков!",
                                "pointsCorStart": {"top":"150", "left":'50'},
                                "pointsCorEnd": {"top":'270', "left":'400'}
                            },
                            {
                                "title": "Кристина",
                                'age': "18 лет",
                                "image": rewImg3,
                                "subtitle": "Я долго искала удобные курсы английского,\n пока не попала в эту школу! Занятия\nпроходят в Zoom/Skype, и это реально\nудобно — не нужно никуда ехать, учишься\nиз дома в комфортном темпе. ",
                                "pointsCorStart": {"top":"150", "left":'50'},
                                "pointsCorEnd": {"top":'245', "left":'345'}
                            },
                        ]
                    }
                    renderItem={
                        (item) => (
                            <ReviewItem
                                title={item.title}
                                age={item.age}
                                subtitle={item.subtitle}
                                image={item.image}
                                pointsCorStart={item.pointsCorStart}
                                pointsCorEnd={item.pointsCorEnd}
                            ></ReviewItem>
                        )
                    }
                />
            </div>
            <Footer/>
        </div>

    );
};

export default HomePage;


