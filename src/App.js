import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(){
  super();
  this.state = {
    clicks: 0
  }
  this.handleClick = this.handleClick.bind(this);
}

handleClick(){
  this.setState({
    clicks: this.state.clicks + 1
  })
  console.log(this.state.clicks)
}
  render() {
    return (
      <div className="App">
        <p>Counter: {this.state.clicks}</p>
        <button type="submit" name="counter" onClick= {this.handleClick}> Click Me! </button>
      </div>
    );
  }
}

export default App;
