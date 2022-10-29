import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export default class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: 'red' };
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}
