import React from 'react'

class Pool extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sx: [],
      sy: [],
      r: 10
    }
    this.ripple = this.ripple.bind(this)
    this.clear = this.clear.bind(this)
  }

  clear () {
    this.setState({ sx: [], sy: [] })
  }

  ripple (x, y) {
    let { sx, sy } = this.state
    if (sx.length > 13) this.setState({ sx: sx.slice(1, sx.length), sy: sy.slice(1, sy.length) })
    this.setState({ x: sx.push(x), y: sy.push(y) })
  }

  render () {
    const { sy, r } = this.state
    const { h, w } = this.props
    const style = { height: h, width: w }
    return (
      <div className='pools' style={style} onClick={this.clear} onMouseMove={(e) => { this.ripple(e.pageX, e.pageY) }}>
        <svg style={style}>
          {this.state.sx.map((x, i) => <circle key={i} cx={x} cy={sy[i]} r={r * (i * 0.4)} />)}
        </svg>
      </div>
    )
  }
}
export default Pool
