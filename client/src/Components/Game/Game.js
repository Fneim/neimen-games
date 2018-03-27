import React from 'react';
import Youtube from 'react-youtube';
import "./game.css";

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name:"" };
  }

  handleChange = e => {
    this.setState({ name: e.target.value});
  }

  render() {
    return (
      <div className="game-sect">
          <h1>ABOUT</h1>
          <p>Evan and I create games in Unity in our spare time</p>
          <input value={this.state.name} onChange={this.handleChange} />
          <h1>{this.state.name}</h1>
      </div>
    )
  }
}

export class Game extends React.Component {
  render() {
    const opts = {
      height: '100%',
      width:'100%',
      playerVars: {autoplay:1}
    };

    return (
      <div className="game-sect">
        <p>Placeholder</p>
        <div id="video-container">
          <Youtube videoId="lTPFtSFmkhk" opts={opts} onReady={this._onReady} />
        </div>
        <h3>Video by Sykoo</h3>
      </div>
    );
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}
