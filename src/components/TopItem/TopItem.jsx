import React from 'react';
import './TopItem.css';

const TopItem = ({title, subtitle}) => {
    return (
        <div className="top-item-container">
            <div className="top-item-title">
                {title}
            </div>
            <div className="top-item-subtitle">
                {subtitle}
            </div>
        </div>
    );
};


export default TopItem;

