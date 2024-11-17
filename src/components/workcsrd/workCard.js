import React from 'react';
import { NavLink } from 'react-router-dom';

import './workcard.css';

const WorkCard = ({ imgsrc, title, text, view }) => {
    return (
        <div className="project-card">
            <img src={imgsrc} alt="img" />
            <h2 className="project-title">{title}</h2>
            <div className="pro-details">
                <p> {text} </p>
                <div className="pro-btns">
                    <NavLink to={view} className="btn" target="_blank">
                        Source
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
