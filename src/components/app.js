import React, { useState, useEffect } from 'react';
import GeneralInfoCard from './generalinfocard/generalInfoCard'
import Balance from './balance/balance'

const App = () => {

  return(
    <div className="app">
      <GeneralInfoCard />
      <Balance />
    </div>
  )
}

export default App
