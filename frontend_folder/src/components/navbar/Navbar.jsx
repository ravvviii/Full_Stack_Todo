import React from 'react';
import { LuNotebook } from "react-icons/lu";
import "./Navbar.css";

function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" href="#"> <b>
                    <LuNotebook />&nbsp;
                        todo
                        
                        </b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item m-2">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>   


                            <li className="nav-item m-2">
                                <a className="nav-link active" aria-current="page" href="#">About US</a>
                            </li> 


                            <li className="nav-item m-2">
                                <a className="nav-link active" aria-current="page" href="#">Todo</a>
                            </li> 


                            <li className="nav-item m-2">
                                <a className="nav-link active btn-nav" aria-current="page" href="#">SignUp</a>
                            </li> 


                            <li className="nav-item m-2">
                                <a className="nav-link active btn-nav" aria-current="page" href="#">SignIn</a>
                            </li> 


                            <li className="nav-item m-2">
                                <a className="nav-link active btn-nav" aria-current="page" href="#">Logout</a>
                            </li> 

                            
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar