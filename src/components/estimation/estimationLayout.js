import React, { useState, useEffect } from 'react';

const EstimationLayout = ({ tableData }) => {
  const [info, setInfo] = useState()

  useEffect(() => {
    fetch('https://be6p23ysj7.execute-api.us-east-1.amazonaws.com/dev/projects/76bde480-70de-484b-4b87-c993642d8130-008c/contracts')
      .then(response => response.json())
      .then(actual_response => {
        setInfo(actual_response)
        console.log("PASO POR AQUI", actual_response);
      })
      .catch(error => console.log("Fetch error", error))
  }, []);


  const progress = Number(((info && info.results[0].total_amount)/((tableData.map(x => ((x.estimate - x.down_payment - x.guarantee_fund))+((x.estimate - x.down_payment - x.guarantee_fund)*0.16))).reduce((a, b) => { return a + b }))).toFixed(1))

  function ToMxn(int) {
    return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(int)
  }

  return (
    <div className="estimation-container div5">
      <div className="estimation-row">
        <div className="progress-card">
          <h1>PROGRESO A FECHA</h1>
          <p>{progress}%</p>
          <div className="progress-bar">
            <span style={{width: `${progress}%`}} />
            
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
            <p> { ToMxn(info && info.results[0].total_amount)} </p>
          </div>
          <div className="summary-col">
            <p>{ToMxn((tableData.map(x => ((x.estimate - x.down_payment - x.guarantee_fund))+((x.estimate - x.down_payment - x.guarantee_fund)*0.16))).reduce((a, b) => { return a + b }))}</p>
          </div>
          <div className="summary-col">
            <p> { ToMxn((info && info.results[0].total_amount)-(tableData.map(x => ((x.estimate - x.down_payment - x.guarantee_fund))+((x.estimate - x.down_payment - x.guarantee_fund)*0.16))).reduce((a, b) => { return a + b })) } </p>
          </div>
          <div className="summary-col">
            <p> { ToMxn(((info && info.results[0].total_amount)*(info && info.results[0].down_payment))-(tableData.map(x => (x.down_payment))).reduce((a, b) => { return a + b })) }</p>
          </div>
          <div className="summary-col">
            <p>{ToMxn((tableData.map(x => (x.guarantee_fund))).reduce((a, b) => { return a + b }))}</p>
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
            {tableData.map((item, index) => {

              let subtotal = (item.estimate - item.down_payment - item.guarantee_fund)
              let iva = subtotal * 0.16
              let total = subtotal + iva

              return (
                <tr className="prueba">
                  <td> {index + 1}</td>
                  <td> {item.reviewDate} </td>
                  <td> {item.name} </td>
                  <td> {item.reviewed_by} </td>
                  <td> {ToMxn(item.estimate)} </td>
                  <td> {ToMxn(item.down_payment)} </td>
                  <td> {ToMxn(item.guarantee_fund)} </td>
                  <td> {ToMxn(subtotal)} </td>
                  <td> {ToMxn(iva)} </td>
                  <td> {ToMxn(total)} </td>
                </tr>
              )
            })
            }

            <tr className="row-totals">
              <td><div className="border-top"></div></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>{ToMxn((tableData.map(x => (x.estimate))).reduce((a, b) => { return a + b }))}</td>
              <td>{ToMxn((tableData.map(x => (x.down_payment))).reduce((a, b) => { return a + b }))} </td>
              <td>{ToMxn((tableData.map(x => (x.guarantee_fund))).reduce((a, b) => { return a + b }))} </td>
              <td>{ToMxn((tableData.map(x => (x.estimate - x.down_payment - x.guarantee_fund) )).reduce((a, b) => { return a + b }))} </td>
              <td>{ToMxn((tableData.map(x => ((x.estimate - x.down_payment - x.guarantee_fund)*0.16))).reduce((a, b) => { return a + b }))} </td>
              <td>{ToMxn((tableData.map(x => ((x.estimate - x.down_payment - x.guarantee_fund))+((x.estimate - x.down_payment - x.guarantee_fund)*0.16))).reduce((a, b) => { return a + b }))} </td>
            </tr>
          </tbody>
         </table>
      </div>
    </div>
  )
}

export default EstimationLayout
