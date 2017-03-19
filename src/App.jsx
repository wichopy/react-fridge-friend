import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryList from './GroceryList.jsx';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      groceries: ['apples','oranges','onions','celery', 'steak'],
      fridge: ['banana', 'cucumber', 'chicken']
    }
      console.log(this.state)
  }

  render() {

    return (
      <div>
      <div className="App">
        <div className="App-header">
        
          <h2>   <img src={logo} className="App-logo" alt="logo" /> Welcome to Fridge Friend React</h2>
        </div>
      </div>
      <div className="grocery-list">
        <GroceryList groceries={this.state.groceries} fridge={this.state.fridge} />
      </div>
      </div>
    );
  }
}
