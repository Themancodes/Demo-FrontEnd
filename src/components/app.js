import React, { useState, useEffect } from 'react';
import GeneralInfoCard from './generalInfoCard'
import fetchApi from "../API/fetch"

const App = () => {

  const [info, setInfo] = useState()
  
  async function fetchData() {
    const data = await fetch('https://be6p23ysj7.execute-api.us-east-1.amazonaws.com/dev/projects/76bde480-70de-484b-4b87-c993642d8130-008c/contracts')
    const json = await data.json()
    setInfo({ json })


    console.log("Soy json", json)
    console.log("Soy info", info)
    }
    
  useEffect(()=> {
    fetch('https://be6p23ysj7.execute-api.us-east-1.amazonaws.com/dev/projects/76bde480-70de-484b-4b87-c993642d8130-008c/contracts')
    .then(response => response.json())
    .then(json2 => {
     console.log(json2)
     setInfo(json2)
    return json2
  })
  .catch(error => console.log("Fetch error", error))

  },[]);

  return(
    <div className="app">
      {console.table("ya", info && info.results)}
        <GeneralInfoCard
          contractCode = { info && info.results[0].code }
          specialty = { info && info.results[0].category }
          startDate = { info && info.results[0].start_date }
          contractName = { info && info.results[0].name }
          contractor = { info && info.results[0].contractor }
          endDate = { info && info.results[0].end_date }
          duration = { info && (new Date(info.results[0].end_date) - new Date(info.results[0].start_date)) / 86400000 + " days" }
          evidence = { info && info.results[0].file }
        />
      </div>
    )
}

export default App