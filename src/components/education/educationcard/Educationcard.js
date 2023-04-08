import React from "react";
import "./educationcard.css";


const Educationcard = (props) => {
    return(
        <div className="cards__content">
            <div className="education_card">
                    <div className="icon">
                        <img src={props.img} alt="education" style={{width:props.width}} />
                    </div>
                    <div className="info">
                        <h2> {props.title} </h2>
                    </div>
                </div>
        </div>
    );
};


export default Educationcard;