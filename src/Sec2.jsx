import React from 'react';
import { NavLink } from 'react-router-dom';
import cap from "./images/capsule.jpg";

const Sec2=()=>{
    return(<>
        <div className="sec2 container-fluid">
            <div className="img">
                <img src={cap} alt="img_errr"></img>
            </div>
            <div className="text_portion">
                <h1>We're not about</h1><h1>pseudoscience and half-truths</h1>
                <p>From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need.</p>

                <div className="links">
                    <ul className="list-unstyled deco">
                        <li><NavLink to="">Multivitamin for Women 18+</NavLink></li>
                        <li><NavLink to="">The Prenatal Multivitamin</NavLink></li>
                        <li><NavLink to="">Multivitamin for Men 18+</NavLink></li>
                        <li><NavLink to="">Essential Protein Daily Shake 18+</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}
export default Sec2;