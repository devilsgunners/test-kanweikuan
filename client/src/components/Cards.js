import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loadingIndicator from "../assets/images/loading_blue.gif";
import '../App.css';
class Cards extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      isDistributing: false,
      isComplete: false,
      numberOfPerson: 0,
      validationErrors: [],
      apiResponse: null
    };
    this.state = Object.assign({}, this.defaultState);

  }

  callAPI(numberOfPerson) {
    console.log("no. of person" + this.state.numberOfPerson);

    fetch('http://localhost:9000/card/distributecards', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numberOfPerson: this.state.numberOfPerson
      })
    })
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res, isDistributing: false, numberOfPerson: null, isComplete: true}));

  }


  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.numberOfPerson);
    var validationErrors = [];

    // Error handling
    if(!this.state.numberOfPerson) {
      validationErrors.push(`Input value does not exist or value is invalid`);
    }

    if(this.state.numberOfPerson === "0") {
      validationErrors.push(`Number of person has to be larger than 0`);
    }

    // Uncomment if only 52 or lesser persons allowed to play
    // if(this.state.numberOfPerson > 52) {
    //   validationErrors.push(`Number of person has to be smaller than 53`);
    // }

    if(this.state.numberOfPerson < 0) {
      validationErrors.push(`Invalid input`);
    }

    this.setState({
      validationErrors: validationErrors
    });
    if (validationErrors.length > 0) return;
    
    // If no error, start distibuting cards
    this.setState({
      isDistributing: true
    });
    this.callAPI(this.state.numberOfPerson);
  }

  reset(event){
    // Reset all to default state
    this.setState({
      isDistributing: false,
      isComplete: false,
      numberOfPerson: 0,
      apiResponse: null,
      validationErrors: []
    });
    
  }
    render() {
      return (
        <form onSubmit={(event) => this.handleSubmit(event)}>
        {this.state.validationErrors.length > 0 ? (
          <div style={{color: "red"}} className="col-12">
            <span>Required Fields</span>
            <ul>
              {this.state.validationErrors.map((error, index) => (
                <li key={`validationError_${index}`}>
                  <div className="m-0">{error}</div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}  
        <div>
          <p>
            Number of Person: &nbsp;
          <input
                  id="numberOfPerson"
                  className="form-control"
                  type="number"
                  value={this.state.numberOfPerson}
                  onChange={event => {
                    this.setState({ numberOfPerson: event.target.value });
                  }}
                />
          </p>
          <p>
          <button type="submit" className="btn btn-primary" disabled={this.state.isComplete}>
            Distribute Cards
          </button>&nbsp;
          <button type="reset" className="btn btn-primary" onClick={(event) => this.reset(event)}>
            reset
          </button>
          </p>
          
        </div>
        <div>{this.state.isDistributing ? (
              <span>
                <img src={loadingIndicator} style={{ width: "30px", height: "30px" }} alt="Loading..."/>
              </span>
            ) : null}{" "}</div>
        <div>
        {
          this.state.apiResponse ? 
            JSON.parse(this.state.apiResponse).map((persons, index) => {
              console.log(index+1);
              var playerNumber = index + 1;
              var p = 'Player '+ playerNumber + ': ' ;
              var o = persons.map(function(card) {
                return card.card + ', '
              })

              return <p>  {p + o } </p>;
            })  : null

           
        }
        { this.state.apiResponse ? <p>Press reset to start the game again.</p> : null}
        </div>
        </form>

                
      );
      
    }
  
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired
}

export default Cards;
