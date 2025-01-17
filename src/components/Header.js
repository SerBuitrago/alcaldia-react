import React from 'react';

import './styles/Header.css';
import { Link } from 'react-router-dom';
import logoAlcaldia from '../images/escudo.png';
import { FaHome } from "react-icons/fa";
class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav class="navbar navbar-light nav-dark">
                    <div class="container">
                        <span className="alcaldia">El sitio oficial de la Ciudad de Cúcuta</span>
                        <a class="navbar-brand" href="#">
                            <img className="logo-alcaldia " src={logoAlcaldia} alt=""  class="d-inline-block align-text-top"/>
                        </a>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to="/Home" className="navbar-brand" ><FaHome></FaHome></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/Servicios" className="nav-link">Servicios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/QueHacer" className="nav-link">Que Hacer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/AsiVamos" className="nav-link">Asi vamos</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Noticias</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Transparencia" className="nav-link">Transparencia</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Alcalde" className="nav-link">Alcalde</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Header;