import React from 'react';
import Educationcard from './educationcard/Educationcard';

import { educationInfo } from '../../constant/Constant';
import './education.css';

const Education = () => {
    return (
        <div className="education__cards">
            <h2>Education & Certificates</h2>
            <div className="cards__content">
                {educationInfo.map(({ img, title, width }, index) => (
                    <Educationcard img={img} title={title} width={width} />
                ))}
            </div>
        </div>
    );
};

export default Education;
