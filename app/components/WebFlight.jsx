import React, { Component } from 'react'
import path from 'path'

class WebFlight extends Component {
  constructor () {
    super()
    this.replaceSrc = function (src) {
      if (wfGlobal[path.basename(src)]) {
        this.wfSrc = wfGlobal[path.basename(src)]
      } else {
        this.wfSrc = src
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    this.replaceSrc(nextProps.source)
  }

  componentWillMount () {
    this.replaceSrc(this.props.source)
  }

  render () {
   console.log('photo', this.props.photos) 
    return (
    <div>
      <img src={this.props.photos} className={this.props.cls} 
        onClick={this.props.handle} />
    </div>
    )
  }
}

export default WebFlight