import React, { Component } from 'react';
import GroceryListItem from './GroceryListItem.jsx'
import FridgeItem from './FridgeItem.jsx'
import FoodForm from './FoodForm.jsx';
class GroceryList extends Component {

  render() {
    const listItems = this.props.groceries.map((groc, i) =>
      <GroceryListItem groc={groc} key={i} />
    );
    const fridgeItems = this.props.fridge.map( (fi,i) => 
      <FridgeItem fi={fi} key={i} />
    )
    return ( 
      <div className="container">
        <div className="row center-align food-form">
            <FoodForm newFoodItem={this.props.newFoodItem}/>
        </div>
        <div className="row">
          <div className="col s6">
            <h3>Grocery List</h3>
            <ul className="collection"> { listItems } </ul>
          </div>
          <div className="col s6">
            <h3>Fridge Inventory</h3>
            <ul className="collection"> { fridgeItems } </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GroceryList;