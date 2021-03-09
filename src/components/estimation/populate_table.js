import React, { useState, useEffect } from 'react';

export default class Table extends React.Component {
 
  constructor(props){
  super(props);
  this.getHeader = this.getHeader.bind(this);
  this.getRowsData = this.getRowsData.bind(this);
  this.getKeys = this.getKeys.bind(this);
  }
  
  getKeys = function(){
    return Object.keys(this.props.data[0]);
  }
  
  getHeader = function(){
  
  }
  
  getRowsData = function(){
  
  }
  
  render() {
  return (
  <div className="sticky-table">
  <table>
  <thead>
  <tr>{this.getHeader()}</tr>
  </thead>
  <tbody>
  {this.getRowsData()}
  </tbody>
  </table>
  </div>
  
  );
  }
 }
 const RenderRow = (props) =>{
  
 }

 getKeys = function(){
  return Object.keys(this.props.data[0]);
  }