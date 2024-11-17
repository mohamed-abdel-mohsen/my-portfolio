import React from 'react';
import './skills.css';

import { skillsDetails } from '../../constant/Constant';

const Skills = () => {
    return (
        <div className="cards">
            <h2>Skills</h2>
            <div className="cards__content">
                {skillsDetails.map(({ icon, info }, index) => (
                    <div className="card" key={index}>
                        <div className="icon">{icon}</div>
                        <div className="info">
                            <h2> {info} </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
