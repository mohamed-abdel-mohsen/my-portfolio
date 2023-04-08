import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer"; 
import Heroimage from "../components/heroimage/Heroimage";
import about from "../img/about.jpg";
import Aboutcontent from "../components/aboutcontent/Aboutcontent";
import Education from "../components/education/Education";

// import uos from "../img/uos.png";


const About = () => {
    return(
        <div>
            <Navbar />
            <Heroimage image={about} title="About." />
            <Aboutcontent />
            <Education/>
            <Footer />
        </div>
    );
};

export default About;