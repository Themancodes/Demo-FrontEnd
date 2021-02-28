import React from 'react';
import imageFile from '../images/file-pdf-solid.svg';

const GeneralInfoCard = ({
    contractCode,
    specialty,
    startDate,
    contractName,
    contractor,
    endDate,
    duration,
    evidence
}) => {

    return (
        <div className="card-container" >
            <div className="card-column">
                <div className="card-row">
                    <h1>Código contrato</h1>
                    <p className="text-b"> {contractCode} </p>
                </div>

                <div className="card-row">
                    <h1>Especialidad</h1>
                    <p>{specialty}</p>
                </div>

                <div className="card-row">
                    <h1>Fecha inicio</h1>
                    <p>{startDate}</p>
                </div>
            </div>

            <div className="card-column">
                <div className="card-row">
                    <h1>Nombre contrato</h1>
                    <p>{contractName}</p>
                </div>

                <div className="card-row">
                    <h1>Contratista</h1>
                    <p className="text-hl">{contractor}</p>
                </div>

                <div className="card-row-2">
                    <div className="card-row">
                        <h1>Fecha Terminación</h1>
                        <p>{endDate}</p>
                    </div>
                    <div className="card-row">
                        <h1>Duración</h1>
                        <p>{duration}</p>
                    </div>
                </div>
            </div>

            <div className="card-column">
                <div className="card-row" >
                    <h1>Evidencia</h1>
                    <img src={imageFile} alt="Ícono de Archivo" />
                    <p className="text-hl text-sm">{contractCode}</p>
                </div>
            </div>
        </div>
    )
}

export default GeneralInfoCard