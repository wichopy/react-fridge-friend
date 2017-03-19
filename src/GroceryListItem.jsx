import React from 'react';

function GroceryListItem(props) {

  return (
    <a key={ props.key } href="#!" className="collection-item" > 
      { props.groc } 
    </a>
  );
}

export default GroceryListItem;
