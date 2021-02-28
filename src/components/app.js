import React, {Component} from 'react';
import GeneralInfoCard from './generalInfoCard'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <GeneralInfoCard
          name={100}
          detail="este es el detalle"
        />
      </div>
    );
  }
}
