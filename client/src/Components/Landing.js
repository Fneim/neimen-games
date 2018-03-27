import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { Game } from './Game/Game';
import "./../index.css";

export class Landing extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <Game />
      </div>
    )
  }
}
