import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryList from './GroceryList.jsx';
// import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      groceries: ['apples','oranges','onions','celery', 'steak'],
      fridge: ['banana', 'cucumber', 'chicken']
    }
  }
  newMessageFromServer(event) {
    console.log(event)
    this.setState({groceries: this.state.groceries.concat(event.data)});
  }
  componentDidMount() {
    const ws = new WebSocket('ws://localhost:3001');
    this.socket = ws;
    this.socket.onopen = () => {
      console.log('Connected to server');
    }
    this.socket.onmessage = (event) => {
      // console.log(event.data);
      console.log("received data from database");
      this.newMessageFromServer(event);
    }
    this.socket.onclose = () => {
      console.log('closing socket!');
    }
  }
/**
 * 
immutable: Array#concat, Array#slice, Array#map, Array#reduce, Array#filter,
mutable: Array#push, Array#splice, for loops w/ direct access
 */
  newFoodItem (food) {
    this.socket.send(JSON.stringify(food));
  }

  findShelfLife(food){
    // return axios({
    //   method: 'get',
    //   url: 'https://shelf-life-api.herokuapp.com/search?q='+food,
    //      withCredentials: false,
    //     // headers: {'X-Requested-With': "XMLHttpRequest"}
    // })
    // .then((data) => {
    //   console.log(data);
    //   return data;
    // });
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
