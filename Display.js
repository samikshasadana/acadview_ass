import React, { Component } from 'react';

class Display extends Component {
  render() {
    console.log(this.props);
    return (
    <div id="box">
    <h2>This is display data</h2>
    <div>Name: {this.props.name}</div>
    <div>Age: {this.props.Age}</div>
    <div>Birth-month: {this.props.Birthmonth}</div>
      </div>
    );
  }
}

export default Display;
