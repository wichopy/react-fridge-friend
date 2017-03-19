import React, { Component } from 'react';

class GroceryList extends Component {

  render() {
    const listItems = this.props.groceries.map((groc, i) =>
      <a key={ i } href="#!" className="collection-item" > 
        { groc } 
      </a>
    );
    const fridgeItems = this.props.fridge.map( (fi,i) => 
      <a key={ i } href="#!" className="collection-item" > 
        { fi } 
      </a>
    )
    return ( 
      <div className="container">
        <div className="row">
          <div className="col s6">
            Grocery List
            <ul className="collection"> { listItems } </ul>
          </div>
          <div className="col s6">
            Fridge Inventory
            <ul className="collection"> { fridgeItems } </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GroceryList;