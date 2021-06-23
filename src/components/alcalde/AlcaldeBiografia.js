import React from 'react';
import AlcaldeJSON from '../../alcalde.json';

class AlcaldeBiografia extends React.Component {
    constructor(props) {
        super(props);
        this.state = { alcalde: [] };
    }
    componentWillMount() {
        fetch('http://seminarioalcaldia-env.eba-ws2bjadt.us-east-1.elasticbeanstalk.com/alcaldia')
            .then((response) => {
                return response.json()
            })
            .then((a) => {
                console.log(a[0]);
                this.setState({ alcalde: a[0] })
            })
    }
    render() {
        return (
            <div className="alcalde-biografia">
                <h1>Alcalde</h1>
                <div className="alcalde-tarjeta">
                    <div className="alcalde-tarjeta-row">
                        <div className="alcalde-tarjeta-row__info">
                            <h2>{this.state.alcalde.alcalde}</h2>
                            <p>{this.state.alcalde.nombre}</p>
                        </div>
                        <div className="alcalde-tarjeta-row__image">
                            <img src={AlcaldeJSON.alcalde.foto} />
                        </div>
                    </div>
                    <div className="alcalde-tarjeta-row">
                        <label>Fecha Nacimiento <span>{AlcaldeJSON.alcalde.nacimiento.fecha}</span></label>
                        <label>Lugar <span>{AlcaldeJSON.alcalde.nacimiento.lugar}</span></label>
                    </div>
                </div>
                <div className="alcalde-lema">
                    <p><span>"</span>{AlcaldeJSON.alcalde.lema}<span>"</span></p>
                </div>
                <div className="alcalde-descripcion">
                    <h2>Biografia</h2>
                    <p>{AlcaldeJSON.alcalde.breve}</p>
                    <p>{AlcaldeJSON.alcalde.descripcion}</p>
                    <h2>Eleccion</h2>
                    <p>{AlcaldeJSON.alcalde.eleccion}</p>
                </div>
            </div>
        );
    }
}

export default AlcaldeBiografia;