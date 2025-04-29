import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './CoursesPage.css';
import TopItem from "../../components/TopItem/TopItem";
import CoursesCards from "../../components/CourseCard/CourseCard";
import Footer from "../../components/Footer/Footer";
import TryTest from "../../components/TryTest/TryTest";
import StartStudy from "../../components/StartStudy/StartStudy";
import startStudy2 from "../../assets/images/image 242.png";




const CoursesPage = () => {
    return (
        <div className="page-container">
            <div className="container">
                <Navbar />
                <TopItem title={"Наши курсы английского языка"} subtitle={"Выберите программу, которая подходит именно вам, и начните говорить на английском с первого занятия!"} />
                <CoursesCards/>
                <StartStudy img={startStudy2}/>
                <TryTest/>
            </div>
            <Footer />
        </div>

    );
};

export default CoursesPage;


