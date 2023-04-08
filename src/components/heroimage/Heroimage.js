import React from "react";
import "./heroimage.css";


const Heroimage = (props) => {
    return(
        <div>
             <div className="hero">
            <div className="mask">
                <img className="hero__img" src={props.image} alt="hero"/>
            </div>
            <div className="content">
                <h1>{props.title}</h1>
            </div>
        </div>
        </div>
    );
};

export default Heroimage;