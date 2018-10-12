// Code YouTubeDebugger Component Here

import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: '1080p' } }
    };
  }

  bitrateEvent = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  resolutionEvent = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateEvent}>bitrate</button>
        <button className="resolution" onClick={this.resolutionEvent}>resolution</button>
      </div>
    );
  }
}


export default YouTubeDebugger;
