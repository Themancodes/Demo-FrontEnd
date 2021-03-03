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






















      <div className="sticky-table">
        <table className="sticky-table">
          <thead>
            <tr>
              <th>01</th>
              <th>Fecha aprobación</th>
              <th>Concepto</th>
              <th>Aprobado por</th>
              <th>Estimación</th>
              <th>Anticipo</th>
              <th>Fondo Garantía</th>
              <th>Subtotal</th>
              <th>IVA</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>01</td>
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
              <td>01</td>
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
              <td>01</td>
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
              <td>01</td>
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
              <td>01</td>
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
              <td>01</td>
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
              <td>01</td>
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
              <td>01</td>
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
            <tr className="row-totals">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
              <td>Happy</td>
            </tr>
          </tbody>
        </table>
        {/* <div class="papa">
          <div class="izquierda">
            <div class="header-izq">ierda-PALABRA LARGA
              <div>#</div>
              <div>HEADERS</div>
              <div>HEADERS</div>
              <div>HEADERS</div>
            </div>
            <div class="row-izq">
              <div>n</div>
              <div>ROW-Izquierda-PALABRA LARGAierda-PALABRA LARGA</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
            </div>
            <div class="row-izq">
              <div>n</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
            </div>
            <div class="row-izq">
              <div>n</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
            </div>
            <div class="row-izq">
              <div>n</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
            </div>
            <div class="row-izq">
              <div>n</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
            </div>
            <div class="row-izq">
              <div>n</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
            </div>
            <div class="row-izq">
              <div>n</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
            </div>
            <div class="row-izq">
              <div>n</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
            </div>
            <div class="row-izq">
              <div>n</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
            </div>
            <div class="row-izq">
              <div>n</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
            </div>
            <div class="row-izq">
              <div>n</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
            </div>
            <div class="row-izq">
              <div>n</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
              <div>ROW-Izquierda</div>
            </div>
          </div>





          <div class="derecha">
            <div class="header-der">
              <div>HEADER-DER</div>
              <div>HEADER-DER</div>
              <div>HEADER-DER</div>
              <div>HEADER-DER</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>         
              </div>
            <div class="row-der">
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA-PALABRA LARGA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
            </div>
            <div class="row-der">
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
            </div>
            <div class="row-der">
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
            </div>
            <div class="row-der">
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
            </div>
            <div class="row-der">
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
            </div>
            <div class="row-der">
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
            </div>
            <div class="row-der">
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
            </div>
            <div class="row-der">
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
            </div>
            <div class="row-der">
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
            </div>
            <div class="row-der">
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
            </div>
            <div class="row-der">
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
            </div>
            <div class="row-der">
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
              <div>ROW-DERECHA</div>
            </div> */}

      </div>
    </div>


  )
}

export default EstimationLayout
