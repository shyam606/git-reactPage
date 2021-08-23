import React from 'react';
import { NavLink } from 'react-router-dom';
import map from "./images/map.jpg";

const Sec3=()=>{
    return(<>
        <div className="sec3 container-fluid">
            <div className="text_portion">
                <h1>You deserve traceability</h1>
                <p>We share our sources, studies, and suppliers — daily essentials backed by the first visible supply chain of its kind.</p>
                <div className="links">
                    <ul className="list-unstyled deco">
                        <li><NavLink to="">Who We Are</NavLink></li>
                        <li><NavLink to="">Meet Our Ingredients</NavLink></li>
                        <li><NavLink to="">Our Clinical Study</NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="img">
                <img src={map} alt="img_errr"></img>
            </div>
        </div>
    </>)
}
export default Sec3;