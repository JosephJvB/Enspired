import React from 'react'

class Pool extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      x: null,
      y: null,
      r: 2
    }
    this.ripple = this.ripple.bind(this)
    this.rippleBigger = this.rippleBigger.bind(this)
  }

  ripple (x, y) {
    this.setState({ x, y })
    this.rippleBigger()
  }

  rippleBigger () {
    if (this.state.r >= 30) return this.setState({ x: null, y: null, r: 2 })
    this.setState({ r: this.state.r * 2 })
    setTimeout(this.rippleBigger, 300)
  }

  render () {
    const { x, y, r } = this.state
    const style = { height: 500, width: 500 }
    return (
      <div className='pools' style={style} onClick={(e) => { this.ripple(e.pageX, e.pageY) }}>
        <svg style={style}>
          <circle cx={x} cy={y} r={r} />
        </svg>
      </div>
    )
  }
}
export default Pool
