import React from 'react';
import ServicioSlider from './servicios/ServicioSlider';
import ServicioBuscar from './servicios/ServicioBuscar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicioCSS from '../css/Servicio.css';

class Servicio extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="contenedor-tramite">
                    <h1>Tramites & Servicios</h1>
                    <div className="slider-padding-tramite">
                        <ServicioSlider></ServicioSlider>
                    </div>
                    <img src="https://www.tauramena-casanare.gov.co/Style%20Library/images/icon/1-04.svg" className="image-tramite"></img>
                    <ServicioBuscar></ServicioBuscar>
                </div>
            </div>
        )
    }
}

export default Servicio;