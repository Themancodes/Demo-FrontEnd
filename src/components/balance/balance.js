import React, { useState, useEffect } from 'react';
import BalanceLayout from './balanceLayout'

const Balance = () => {
  const [info, setInfo] = useState()

  useEffect(()=> {
    fetch('https://be6p23ysj7.execute-api.us-east-1.amazonaws.com/dev/projects/76bde480-70de-484b-4b87-c993642d8130-008c/contracts')
    .then(response => response.json())
    .then(json2 => {
     setInfo(json2)
    return json2
  })
  .catch(error => console.log("Fetch error", error))
  },[]);

  return(
    <BalanceLayout 
      total = { info && info.results[0].total_amount }
      vat = { info && info.results[0].vat }
      guarantee_fund = { info && info.results[0].guarantee_fund }
      down_payment = { info && info.results[0].down_payment }
    />
    
  )
}

export default Balance