import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryList from './GroceryList.jsx';
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      groceries: ['apples','oranges','onions','celery', 'steak'],
      fridge: ['banana', 'cucumber', 'chicken']
    }
  }

  newFoodItem (food) {
    // debugger;
    var currentFoodItems = this.state.groceries
    currentFoodItems.push(food)
    this.setState({groceries: currentFoodItems});
  }

  findShelfLife(food){
    return axios(
      {
        method: 'get',
        url: 'https://shelf-life-api.herokuapp.com/search?q='+food,
        // withCredentials: false,
        // headers: {'X-Requested-With': "ACCESS-CONTROL-ALLOW-ORIGIN"}
      }
    )
    .then((data) => {
      console.log(data);
      return data;
    });
  }

  render() {

    return (
    
      <div className="App">
        <div className="App-header">
          <h2>   <img src={logo} className="App-logo" alt="logo" /> Welcome to Fridge Friend React</h2>
        </div>
        <div className="grocery-list">
          <GroceryList 
            groceries={this.state.groceries} 
            fridge={this.state.fridge} 
            newFoodItem={this.newFoodItem.bind(this)}
            findShelfLife={this.findShelfLife.bind(this)}
          />
        </div>                
      </div>
    );
  }
}
