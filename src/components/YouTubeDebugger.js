// Code YouTubeDebugger Component Here

import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
          errors: [],
           user: null,
           settings: { bitrate: 8,
                      video: { resolution: '1080p' }
        }
      }
    }


  buttonClick1 = () => {
    this.setState({
        settings:{
          ...this.state.settings,
          bitrate: 12,
        },
      });
    }

buttonClick2 = () => {
this.setState({
  settings:{
  ...this.state.settings,
   video: {
    resolution: '720p'
  },
 },
});
}


  render() {
    return (
      <div>

        <button className="bitrate" onClick= {this.buttonClick1}>click me!</button>

        <button className="resolution" onClick= {this.buttonClick2}>click me2!</button>

      </div>
    );
  }
}
