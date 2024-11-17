import React from 'react';
import './aboutcontainer.css';
import Skills from '../skills/Skills';

const Aboutcontent = () => {
    return (
        <div>
            <div className="about_container">
                <h1>Mohamed Abdelmohsen</h1>
                <h2> Full-Stack Developer</h2>
                <h4>
                    Full Stack Software Engineer, specializing in front-end development. While my expertise spans across both front-end and
                    back-end technologies, I have primarily contributed as a front-end developer in professional settings,delivering
                    responsive, user-friendly web applications. Skilled in React.js, modern JavaScript frameworks, TypeScript, and UI/UX
                    best practices, with a strong foundation in full-stack principles.
                </h4>
            </div>
            <Skills />
        </div>
    );
};

export default Aboutcontent;
