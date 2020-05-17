import React, { Component } from 'react';
import Cards from './components/Cards';
import './App.css';

class App extends Component {
  state = {
    cards: [
      {
        id: 0,
        card: 'H-1'
      },
      {
        id: 1,
        card: 'S-2'
      },
      {
        id: 2,
        card: 'D-3'
      }
    ] 
  }

  render() {
      return (
          <div className="App">
            <Cards cards={this.state.cards}/>
          </div>
        );
  }
  
}

export default App;
