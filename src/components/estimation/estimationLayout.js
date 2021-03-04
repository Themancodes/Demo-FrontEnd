import React from 'react';


// const estimationLayout = ({ total, vat, guarantee_fund, down_payment }) => {
const EstimationLayout = ({ consolelog, reviewDate, name, reviewed_by, estimate, down_payment }) => {


  function CurrencyFormat (int) {
    return new Intl.NumberFormat("es-MX", {style: "currency", currency: "MXN"}).format( int )
  }

  // ------------------------------------------------------
  //                  TEMPLATE
  // ------------------------------------------------------
  // temp1.map( (item) => { return (item.estimate)*(item.charge_off) })
  //
  // for ( let index = 0; index < temp1.length; index++  ) {
  //  console.log(temp1[index].estimate) ]
  //

  // function PopulateTable() => {
  //   return void
  // }

  return (
    <div className="estimation-container div5">
      <div className="estimation-row">
        <div className="progress-card">
          <h1>PROGRESO A FECHA</h1>
          <p>50%</p>
          <div className="progress-bar">
            <span style={{ width: '50%' }} />
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
            <p>ssss</p>
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

      <div className="sticky-div">
        <table className="sticky-table">
          <thead>
            <tr>
              <th>#<div className="coverup"></div><div className="bottom-shadow"></div></th>
              <th>Fecha aprobación</th>
              <th>Concepto</th>
              <th>Aprobado por <div className="vertical-shadow"></div></th>
              <th>Estimación<div className="coverup3"></div></th>
              <th>Anticipo<div className="banner"><h4>DEDUCCIONES</h4></div>
              </th>
              <th>Fondo Garantía</th>
              <th>Subtotal<div className="coverup2"></div></th>
              <th>IVA</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{ console.log("im your truth", consolelog ) }</td>
              <td>Sad</td>
              <td>Sad</td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
            
            <tr className="row-totals">
              <td><div className="border-top"></div></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
            </tr>
          </tbody>
        </table>
        

      </div>
    </div>


  )
}

export default EstimationLayout
