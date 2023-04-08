import React from "react";
import "./aboutcontainer.css";
import Skills from "../skills/Skills";


const Aboutcontent = () => {
    return(
        <div>
            <div className="about_container">
                <h1>Mohamed Abdelmohsen</h1>
                <h2> Full-Stack Developer</h2>
                <h4> 
                    I'm a Full-Stack Developer specialized in Front-End with more then two years of experience.
                    I have two Nanoodegree from Udacity Platform <bold>Professional Front-End Web Development</bold> ,
                    <bold>Advanced Full-Stack Web Development</bold> i have been graduated from university of sharjah civil Engineer..  
                </h4>        
            </div>   
            <Skills /> 
        </div>
        
    );
};


export default Aboutcontent;

