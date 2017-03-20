import React, { Component } from 'react';
import GroceryListItem from './GroceryListItem.jsx'
import FridgeItem from './FridgeItem.jsx'
import FoodForm from './FoodForm.jsx';
import {Modal,Button} from 'react-materialize';

class GroceryList extends Component {

  render() {
    const listItems = this.props.groceries.map((groc, i) =>
      <GroceryListItem groc={groc} key={i} />
    );
    const fridgeItems = this.props.fridge.map( (fi,i) => 
      <FridgeItem fi={fi} key={i} />
    )
    const shelflife = this.props.findShelfLife('carrots')
    
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
            <Modal
              header='Modal Header'
              trigger={
                <Button waves='light'>MODAL</Button>
              }>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default GroceryList;