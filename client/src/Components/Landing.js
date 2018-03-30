import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { Demo } from './Demo/Demo';
import { Footer } from "./Footer/Footer";
import "./../index.css";

export class Landing extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <Demo />
        <Footer />
      </div>
    )
  }
}
