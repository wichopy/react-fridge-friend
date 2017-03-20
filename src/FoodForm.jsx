import React, { Component } from 'react';

class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    // debugger;
    this.props.newFoodItem(this.state.value)
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label style={{overflow: 'hidden'}}>
          <input 
            type="text" 
            placeholder="feed me food" 
            value={this.state.value} 
            onChange={this.handleChange} 
            style={{width: '60%', paddingRight: '.5em'}}
            className="food-entry"
          />
        </label>
          <input className="btn waves-effect waves-light" type="submit" value="Submit" 
          /*style={{float: 'center'}}*/
          />
      </form>
    );
  }
}

export default FoodForm