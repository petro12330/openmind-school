import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Carousel.css';
import LeftIcon from '../../assets/icons/left_btn.svg';
import RightIcon from '../../assets/icons/right_btn.svg';

//
// // const TeacherItem = ({
// //                           title,
// //                           subtitle,
// //                           image,
// //                           textColor,
// //                           cardColor,
// //                           size
// //                       }) => {
// //     return (
// //         <div className="stage-card" style={{
// //             color: textColor,
// //             background: cardColor,
// //         }}>
// //             <div className="stage-card__link_to">
// //                 <div className="stage-card__title">
// //                     {title}
// //                 </div>
// //                 <div className="stage-card__subtitle">
// //                     {subtitle}
// //                 </div>
// //             </div>
// //             {/*<img className="stage-card__img" src={image} alt="Иконка ссылки" />*/}
// //
// //         </div>
// //     );
// // };
//
// const Carousel = ({items, title='Наши преподаватели', renderItem, visibleItems = 2}) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [secondIndex, setSecondIndex] = useState(1);
//
//     const handlePrev = () => {
//         let cur = currentIndex === 0 ? items.length - 1 : currentIndex - 1
//         let sec = cur === 0 ? items.length - 1 : cur - 1
//         setCurrentIndex(cur);
//         setSecondIndex(sec);
//     };
//
//     const handleNext = () => {
//         let cur = currentIndex === items.length - 1 ? 0 : currentIndex + 1
//         let sec = cur === items.length - 1 ? 0 : cur + 1
//         setCurrentIndex(cur);
//         setSecondIndex(sec);
//     };
//     if (!items || items.length === 0) return null;
//     return (
//         <div className="carousel-container">
//             <div className="carousel-title-container">
//                 <div className="stage-title2">{title}</div>
//                 <div className="carousel-btn-container">
//                        <img
//                            src={LeftIcon} alt="prev"
//                            className="arrow-button prev" onClick={handlePrev}
//                        />
//                         <img
//                             className="arrow-button next" onClick={handleNext}src={RightIcon} alt="next"
//                         />
//                 </div>
//             </div>
//
//
//             <div>
//                 <div className="stages-container">
//                     {items
//                         .slice(currentIndex, currentIndex + visibleItems)
//                         .map((item, index) => (
//                             <div key={index} className="carousel-item">
//                                 {renderItem(item)}
//                             </div>
//                         ))}
//
//                 </div>
//             </div>
//
//         </div>)
// };
//
//
const Carousel = ({ items, title = 'Наши преподаватели', renderItem }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Всегда показываем 2 элемента
    const visibleItems = 2;

    // Получаем индексы для отображения
    const getVisibleIndexes = () => {
        return [
            currentIndex,
            (currentIndex + 1) % items.length
        ];
    };

    const handlePrev = () => {
        setCurrentIndex(prev =>
            prev === 0 ? items.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex(prev =>
            (prev + 1) % items.length
        );
    };

    if (!items || items.length < 2) return null;

    const [firstIdx, secondIdx] = getVisibleIndexes();

    return (
        <div className="carousel-container">
            <div className="carousel-title-container">
                <div className="stage-title2">{title}</div>
                <div className="carousel-btn-container">
                    <img
                        src={LeftIcon}
                        alt="prev"
                        className="arrow-button prev"
                        onClick={handlePrev}
                    />
                    <img
                        className="arrow-button next"
                        onClick={handleNext}
                        src={RightIcon}
                        alt="next"
                    />
                </div>
            </div>

            <div>
                <div className="stages-container">
                    {/* Первый элемент */}
                    <div className="carousel-item">
                        {renderItem(items[firstIdx])}
                    </div>

                    {/* Второй элемент */}
                    <div className="carousel-item">
                        {renderItem(items[secondIdx])}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Carousel;
