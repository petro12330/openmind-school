import React from 'react';
import './Carousel.css';
import points from '../../assets/icons/points.svg';


const ReviewItem = ({
                          title,
                          age,
                          subtitle,
                          image,
                          pointsCorStart,
                          pointsCorEnd
                      }) => {
    return (
        <div className="review-card">
            <div className="review-container">
                <div className="review-title-cont">
                    <img src={image} className="review-card__img" alt='photo'/>
                    <div className="review-card__info">
                        <div className="review-card__title">
                            {title}
                        </div>
                        <div className="review-card__age">
                            {age}
                        </div>
                    </div>
                </div>
                <div className="review-data">
                    <img
                        src={points}
                        className="review-card__points"
                        alt='points'
                        style={{
                            top: `${pointsCorStart.top}px`,
                            left: `${pointsCorStart.left}px`,
                        }}
                    />
                    <div className="review-card__data">
                        {subtitle}
                    </div>
                    <img
                        src={points}
                        className="review-card__points"
                        alt='points'
                        style={{
                            top: `${pointsCorEnd.top}px`,
                            left: `${pointsCorEnd.left}px`,
                        }}
                    />

                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
