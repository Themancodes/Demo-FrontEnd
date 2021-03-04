import React, { useState, useEffect } from 'react';
import GeneralInfoCard from './generalinfocard/generalInfoCard'
import Balance from './balance/balance'
import EstimationLayout from './estimation/estimationLayout'
import staticsidebar from '../images/static.png';


const App = () => {

  return (
    <div className="app">
      <div className="static-img div1">
        <img src={staticsidebar} alt="sidebar" />
      </div>
      <div className="div2">
        <p>Contract Detail</p>
        <h1>Contractual Control</h1>
      </div>
      <GeneralInfoCard />
      <Balance />
      <EstimationLayout />
    </div>
  )
}

export default App
