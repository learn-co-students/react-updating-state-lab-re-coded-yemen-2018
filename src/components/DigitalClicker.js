// Code DigitalClicker Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class ToggleButton extends React.Component {
  clickedBtn = ()=>{
    this.setState({
      timesClicked: ++this.state.timesClicked
    });
  }
  constructor(){
    super();

    this.state = {
      timesClicked: 0
    }

  }
  render(){
    return(
      <button onClick={this.clickedBtn}>{this.state.timesClicked}</button>
    )

  }

}
