import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import { Switch,Route,Redirect } from 'react-router';
import Navbar from './Navbar';
import Sec1 from './Sec1';
import Sec2 from './Sec2';
import Sec3 from './Sec3';
import Sec4 from './Sec4';
const App = ()=>{
    return(<>
        <Navbar/>
        <Sec1/>
        <Sec2/>
        <Sec3/>
        <Sec4/>
    </>)
}
export default App;