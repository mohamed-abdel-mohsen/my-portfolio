import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Heroimage from "../components/heroimage/Heroimage";
import propject from "../img/project.jpg"
import Work from "../components/workcsrd/Work"; 


const Project = () => {
    return(
        <div>
            <Navbar />
            <Heroimage image={propject} title="Projects." />
            < Work />
            <Footer />
        </div>
    );
};


export default Project;