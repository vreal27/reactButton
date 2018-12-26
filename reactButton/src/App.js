import React, { Component } from 'react';
import './App.css';





class App extends Component {
  state = {
      name: 'likes',
      like: 0
    }


  changeState = (e) => {
    this.setState({
      name: 'likes',
      like: this.state.like + 1,
      
    })

      if(this.state.like + 1 === 1){
        this.setState({
          name: 'like'
        })
    }
  }

  render() {
    return (
      <div className="App">
       <button onClick= {this.changeState}>{this.state.like} {this.state.name}</button>
      </div>
    );
  }
}

export default App;
