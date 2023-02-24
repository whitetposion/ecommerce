import { useState } from "react"
import { MenuData } from "./MenuData";
//import { BrowserRouter as Router , Routes, Route, Link} from "react-router-dom"
import "./Navbar.css"
const Navbar =()=> {
     const [comm, usecomm] = useState(false);
     const handleClick = ()=> {
          usecomm(!comm);
     };

     return (
               <nav className= "NavbarItems">
                    <img src="\\assignment\\public\\images\\bjym_logo (1).png" alt =" bjym logo"className= "logo">
                    </img>
                    
                    <div className= "menu-icons" onClick={handleClick}>
                         <i className={comm ? "fas fa-times" : " fas fa-bars"}></i>
                    </div>
                    <ul className= {comm ? "nav-menu active": "nav-menu"}>
                         {MenuData.map((item, index) =>{
                              return (
                                   <li key={index}>
                                        <a href={item.url} className={item.cName}><i className={item?.icon}></i>{item.title}</a>
                                   </li>
                                   
                                   
                              )
                         })}
                    </ul>
               </nav>
          );
     
};
export default Navbar