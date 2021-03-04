import React, { useState, useEffect } from 'react';
import EstimationLayout from './estimationLayout'

const Estimation = () => {
  const [info, setInfo] = useState()

  useEffect(()=> {
    fetch('https://be6p23ysj7.execute-api.us-east-1.amazonaws.com/dev/projects/76bde480-70de-484b-4b87-c993642d8130-008c/contracts/772f25c98a804fb29a7c3a69f8b9a4b5/management/items')
    .then(response => response.json())
    .then(json2 => {
     console.log(json2)
     setInfo(json2)
    return json2
  })
  .catch(error => console.log("Fetch error", error))
  },[]);

  return(
    <EstimationLayout 
      
      consolelog = { info && info.results}
      // reviewDate = { info && info.results[i].reviewDate }
      // name = { info && info.results[i].name }
      // reviewed_by = { info && info.results[i].reviewed_by }
      // estimate = { info && info.results[i].estimate }
      // down_payment = { info && info.results[i].down_payment }

    />
    
  )
}

export default Estimation

