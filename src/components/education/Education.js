import React from "react";
import "./education.css";
import Educationcard from "./educationcard/Educationcard";
import uos from "../../img/university-of-sharjah_592560cf2aeae70239af5471_large.jpg";
import udacity from "../../img/Udacity_logo.png";
import aws from "../../img/AWS-logo.jpg";
import iti from "../../img/iti.jpg"


const Education = (props) => {
    return(
        <div className="education__cards">
            <h2>Education & Certificates</h2>
            <div className="cards__content">
                <Educationcard img={uos} title="Bachelor In Civil Engineer" width="150px" />
                <Educationcard img={udacity} title="Professional Front-End Web Development" width="250px" />
                <Educationcard img={udacity} title="Advanced Full-Stack Web Development" width="250px"/>
                <Educationcard img={iti} title="Certificate of Completion JavaScript" width="150px"/>
                <Educationcard img={aws} title="Certificate of Introduction to AWS Elastic Beanstalk" width="150px" />
            </div>
        </div>
    );
};

export default Education;