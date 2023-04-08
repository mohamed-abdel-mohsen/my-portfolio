import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Heroimage from "../components/heroimage/Heroimage"; 
import contact from "../img/contact.jpg";

const Contact = () => {
    return(
        <div>
            <Navbar />
            <Heroimage image ={contact} title="Contact." />
            <Footer />
        </div>
    );
};


export default Contact;