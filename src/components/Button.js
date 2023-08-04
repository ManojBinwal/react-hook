import React, { Component } from 'react';
import  "./Button.css";

export default class Button extends Component {
  render() {
    return (
        <div>
            <button className='button'>Hover Over Me !</button>
        </div>
    )
  }
}