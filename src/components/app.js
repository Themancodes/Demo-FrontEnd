import React, { useState, useEffect } from 'react';
import GeneralInfoCard from './generalinfocard/generalInfoCard'
import Balance from './balance/balance'
import EstimationLayout from './estimation/estimationLayout'

const App = () => {

  return(
    <div className="app">
      <GeneralInfoCard />
      <Balance />
      <EstimationLayout />
    </div>
  )
}

export default App
