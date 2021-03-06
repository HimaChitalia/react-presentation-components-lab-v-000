import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      mood: "happy"
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({
      mood:"happy" ? "sad" : "happy"
    })
  }
  render(){
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;
