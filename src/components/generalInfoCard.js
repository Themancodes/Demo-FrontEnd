import React from 'react';
import imageFile from '../images/file-pdf-solid.svg';

const GeneralInfoCard = () => {

    return (
        <div className="card-container" >
            <div className="card-column">
                <div className="card-row">
                    <h1>Código contrato</h1>
                    <p className="text-b">CO-CO001-20</p>
                </div>

                <div className="card-row">
                    <h1>Especialidad</h1>
                    <p>Concrete</p>
                </div>

                <div className="card-row">
                    <h1>Fecha inicio</h1>
                    <p>13/12/2019</p>
                </div>
            </div>

            <div className="card-column">
                <div className="card-row">
                    <h1>Nombre contrato</h1>
                    <p>Habitante OC/AL Maíz Mier</p>
                </div>

                <div className="card-row">
                    <h1>Contratista</h1>
                    <p className="text-hl"> Constructora Maíz Mier S.A. de C.V.</p>
                </div>

                <div className="card-row-2">
                    <div className="card-row">
                        <h1>Fecha Terminación</h1>
                        <p>20/12/2019</p>
                    </div>
                    <div className="card-row">
                        <h1>Duración</h1>
                        <p>7 Days</p>   
                    </div>
                </div>
            </div>

            <div className="card-column">
                <div className="card-row" >
                    <h1>Evidencia</h1>
                    <img src={ imageFile } alt="Ícono de Archivo" />
                    <p className="text-hl text-sm">CO-CO001-20</p>
                </div>
            </div>




        </div>
    )
}

export default GeneralInfoCard