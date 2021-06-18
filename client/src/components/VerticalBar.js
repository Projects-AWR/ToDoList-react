import React, { Component } from 'react'

export class VerticalBar extends Component {
  render() {
    return (
      <div class="progress vertical">
        <div class="progress-bar progress-bar-warning six-sec-ease-in-out" role="progressbar" data-transitiongoal="80"></div>
      </div>
    )
  }
}

export default VerticalBar
