import React, { useState, useEffect } from 'react';
import GeneralInfoCard from './generalInfoCard'
import fetchApi from "../API/fetch"

const App = () => {

  const [info, setInfo] = useState()
  
  useEffect(()=> {
    async function fetchData() {
      const data = await fetch('https://be6p23ysj7.execute-api.us-east-1.amazonaws.com/dev/projects/76bde480-70de-484b-4b87-c993642d8130-008c/contracts')
      const json = await data.json()
      setInfo(json)


      console.log("Soy json", json)
      console.log("Soy Data", info)
      }
    fetchData();
  },[]);

  return(
    <div className="app">
        <GeneralInfoCard
          contractCode = ""
          specialty = "Madera"
          startDate = "13/12/2019"
          contractName = "Habitante OC/AL Maíz Mier"
          contractor = "LA"
          endDate = "20/12/2019"
          duration = "7 Days"
          evidence = "CO-CO001-20"
        />
      </div>
    )
}

export default App