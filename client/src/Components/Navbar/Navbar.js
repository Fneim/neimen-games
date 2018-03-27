import React from 'react';
import "./navbar.css";

class Logo extends React.Component {
  render() {
    return <h3 id="logo">NEIMEN GAMES</h3>;
  }
}

export class Navbar extends React.Component {
  render () {
    return (
      <Logo />,
      <div id="navbar-div">
          <h3 id="logo">NEIMEN GAMES</h3>
          <ul className="navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">Us</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
      </div>
    )
  }
}
