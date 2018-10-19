// Code YouTubeDebugger Component Here

import React from 'react';
import ReactDOM from 'react-dom';

export default class YouTubeDebugger extends React.Component {
  changeQuality = () =>{
    this.setState({
      settings:{
        ...this.state.settings,
        video: {
          resolution:'720p'
        },
      },
    });
  }
  changeBitrate = () =>{
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }
  constructor(){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

  }
  render(){
    return(
      <div>
      <button className='bitrate' onClick={this.changeBitrate}>To 12</button>
      <button className='resolution' onClick={this.changeQuality}>Watch in 720p</button>

      </div>
    )

  }
}
