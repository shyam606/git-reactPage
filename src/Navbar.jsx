import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return(<>
    <div className="up">
        </div>
    <nav class="nav sticky-top">
        <div className="leftside">
        <NavLink className="nav-link menu" to="">Menu</NavLink>
        <NavLink className="nav-link ritual" to="">Ritual</NavLink>
        </div>

        <div className="rightside">
            <NavLink className="nav-link who" to="">Who We Are</NavLink>
            <NavLink className="nav-link cart" to="">Cart</NavLink>
        </div>
    </nav>
    </>)
}

export default Navbar; 