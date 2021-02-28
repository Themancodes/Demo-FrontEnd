import React from 'react';

const BalanceLayout = ({ total, vat, guarantee_fund, down_payment }) => {

  function CurrencyFormat (int) {
    return new Intl.NumberFormat("es-MX", {style: "currency", currency: "MXN"}).format( int )
  }

  return (
      <div className="balance-container" >
          <div className="balance-row">
              <h1>Total (MXN)</h1>
              <p>{ CurrencyFormat( total ) }</p>
          </div>
          <div className="balance-row">
              <h1> { `IVA (${ vat * 100 })%` } </h1>
              <p>{ CurrencyFormat( total * vat ) }</p>
          </div>
          <div className="balance-row">
              <h1>Contratado sin IVA</h1>
              <p> {CurrencyFormat(total - (total * vat))} </p>
          </div>
          <div className="balance-row">
              <h1>Contratado con IVA</h1>
              <p>{ CurrencyFormat(total)}</p>
          </div>
          <div className="balance-row">
              <h1>{`Anticipo (${ down_payment * 100 })%`}</h1>
              <p>{ CurrencyFormat(total * down_payment)}</p>
          </div>
          <div className="balance-row">
              <h1>{`Fondo Garantía (${ guarantee_fund * 100 })%`}</h1>
              <p>{ CurrencyFormat(total * guarantee_fund) }</p>
          </div>
      </div>
    )
}

export default BalanceLayout