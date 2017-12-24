import React from 'react'

class Pool extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sx: [],
      sy: [],
      r: 25
    }
    this.ripple = this.ripple.bind(this)
    this.rippleBigger = this.rippleBigger.bind(this)
    this.ticker = this.ticker.bind(this)
  }

  componentDidMount () {
    // this.ticker()
    // console.log(window)
  }

  ticker () {
    const { sx, sy } = this.state
    setInterval(() => this.setState({ sx: sx.slice(1, sx.length), sy: sy.slice(1, sx.length) }), 300)
  }

  ripple (x, y) {
    let { sx, sy } = this.state
    if (sx.length > 6) this.setState({ sx: sx.slice(1, sx.length), sy: sy.slice(1, sy.length) })
    this.setState({ x: sx.push(x), y: sy.push(y) })
    // this.rippleBigger()
  }

  rippleBigger () {
  //   if (this.state.r >= 50) return this.setState({ r: 2 })
  //   // this.setState({ r: this.state.r * 1.1 })
  //   // setTimeout(this.rippleBigger, 100000)
  }

  render () {
    const { sy, r } = this.state
    const { h, w } = this.props
    const style = { height: h, width: w }
    return (
      <div className='pools' style={style} onMouseMove={(e) => { this.ripple(e.pageX, e.pageY) }}>
        <svg style={style}>
          {this.state.sx.map((x, i) => <circle key={i} cx={x} cy={sy[i]} r={r / (i * 0.6)} />)}
        </svg>
      </div>
    )
  }
}
export default Pool
