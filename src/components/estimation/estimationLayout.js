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

{
  "results":[
     {
        "currency":"MXN",
        "down_payment":0.2,
        "file":"projects/76bde480-70de-484b-4b87-c993642d8130-008c/contracts/contrato_prueba.pdf",
        "guarantee_fund":0.05,
        "withVat":1000000,
        "cumulatives":{
           "additives":0,
           "deductive":0,
           "extra":0,
           "estimations":100000
        },
        "end_date":"2021-02-20",
        "responsible":"Diana Solis",
        "status":"In progress",
        "vat":0.16,
        "name":"Contrato de prueba - albañilería",
        "contractor":"Contratista ANSER",
        "code":"PI-CO-001-20",
        "updated_by":"Carlos Mendoza",
        "start_date":"2021-02-10",
        "charge_off":0.05,
        "updatedAt":"2021-02-10",
        "withoutVat":0,
        "category":"Albañileria",
        "sk":"Contract#772f25c98a804fb29a7c3a69f8b9a4b5",
        "id":"772f25c98a804fb29a7c3a69f8b9a4b5",
        "pk":"Project#76bde480-70de-484b-4b87-c993642d8130-008c",
        "total_amount":1000000,
        "type":"Commercial"
     }
  ]
}





{
  "statusCode": 200,
  "results": [
    {
      "down_payment": 4271,
      "reviewed_by": "Carlos Mendoza",
      "guarantee_fund": 1067.75,
      "charge_off": 1067.75,
      "sk": "1612994410#29d7992e90db4b2fa71e4f5e11d11b82",
      "pk": "Contract#772f25c98a804fb29a7c3a69f8b9a4b5|PN",
      "estimate": 21355,
      "name": "ES-CO-100221",
      "reviewDate": "2021-10-02T15:19:30.932750"
    },
    {
      "down_payment": 3040,
      "reviewed_by": "Carlos Mendoza",
      "guarantee_fund": 760,
      "charge_off": 760,
      "sk": "1612909805#a2549c3e60e54ddcb8db7e7684aa489f",
      "pk": "Contract#772f25c98a804fb29a7c3a69f8b9a4b5|PN",
      "estimate": 15200,
      "name": "ES-CO-090221",
      "reviewDate": "2021-02-09T16:30:05.932750"
    }
  ]
}