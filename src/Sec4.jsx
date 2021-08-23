import React from 'react';
import { NavLink } from 'react-router-dom';
import big from "./images/bigpic.jpg";

const Sec4=()=>{
    return(<>
        <div className="sec4 container-fluid">
            <div className="img">
                <img src={big} alt="img_errr"></img>
            </div>
            <div className="text_portion">
                <h1>Clean and simple, delivered</h1>
                <p>Easy-to-start. Easy-to-cancel. Our team of scientists and nutritional experts are on a mission to turn your new healthy habit into a Ritual.*</p>

                <div className="links">
                    <ul className="list-unstyled deco">
                        <li>Free shipping</li>
                        <li>Control your delivery date</li>
                        <li>Free and easy cancellation</li>
                        <li>30-day money back guarantee</li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}
export default Sec4;