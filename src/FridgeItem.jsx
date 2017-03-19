import React from 'react';

function FridgeItem(props) {

  return (
    <a key={ props.key } href="#!" className="collection-item" > 
      { props.fi } 
    </a>
  );
}

export default FridgeItem;
