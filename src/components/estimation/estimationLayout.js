import React from 'react';

// const estimationLayout = ({ total, vat, guarantee_fund, down_payment }) => {
const EstimationLayout = () => {


  // function CurrencyFormat (int) {
  //   return new Intl.NumberFormat("es-MX", {style: "currency", currency: "MXN"}).format( int )
  // }

  return (
        <div className="estimation-container">
          <div className="estimation-row">
            <div className="progress-card">
              <h1>PROGRESO A FECHA</h1>
              <p>50%</p>
              <div className="progress-bar">
                <span style={{width: '50%'}} />
              </div>
            </div>
          </div>
          <div className="estimation-row">
            <div className="summary-titles">
              <div className="summary-col">
                <h1>Total Contenido</h1>
              </div>
              <div className="summary-col">
                <h1>Estimado a la fecha</h1>
              </div>
              <div className="summary-col">
                <h1>Pendiente de estimar</h1>
              </div>
              <div className="summary-col">
                <h1>Anticipo por amortizar</h1>
              </div>
              <div className="summary-col">
                <h1>Fondo garantía retenido</h1>
              </div>
            </div>
            <div className="summary-contents">
              <div className="summary-col">
                <p>$1,000,000.00</p>
              </div>
              <div className="summary-col">
                <p>$1,000,000.00</p>
              </div>
              <div className="summary-col">
                <p>$1,000,000.00</p>
              </div>
              <div className="summary-col">
                <p>$1,000,000.00</p>
              </div>
              <div className="summary-col">
                <p>$1,000,000.00</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default EstimationLayout
