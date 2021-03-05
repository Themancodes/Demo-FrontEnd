import React, { useState, useEffect } from 'react';
import EstimationLayout from './estimationLayout'

const Estimation = () => {
  const [info, setInfo] = useState()

  useEffect(() => {
    fetch('https://be6p23ysj7.execute-api.us-east-1.amazonaws.com/dev/projects/76bde480-70de-484b-4b87-c993642d8130-008c/contracts/772f25c98a804fb29a7c3a69f8b9a4b5/management/items')
      .then(response => response.json())
      .then(server_response => {
        setInfo(server_response)
      })
      .catch(error => console.log("Fetch error", error))

  }, []);




  return (
    <div>
      {
        info && <EstimationLayout
          tableData={info.results}
        />
      }

    </div>

  )
}

export default Estimation

