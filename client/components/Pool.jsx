import React from 'react'

// import Ripple from './Ripple'

class Pool extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sx: [],
      sy: [],
      r: 10,
      cull: ['blue', 'cyan', 'purple', 'pink', 'blue', 'cyan', 'purple', 'pink', 'blue', 'cyan', 'purple', 'pink'],
      col: null
    }
    this.ripple = this.ripple.bind(this)
    this.clear = this.clear.bind(this)
    this.changeCol = this.changeCol.bind(this)
    this.sizeChange = this.sizeChange.bind(this)
  }

  clear () {
    this.setState({ sx: [], sy: [] })
  }

  ripple (x, y) {
    let { sx, sy, cull } = this.state
    // let raNo = Math.floor(Math.random() * cull.length)
    if (sx.length > 13) this.setState({ sx: sx.slice(1, sx.length), sy: sy.slice(1, sy.length) })
    this.setState({ x: sx.push(x), y: sy.push(y) })
  }

  changeCol (c) {
    this.setState({ col: c })
  }

  sizeChange (v) {
    this.setState({ r: this.state.r + v })
  }

  render () {
    const { sx, sy, r, col } = this.state
    const { h, w } = this.props
    const style = { height: h, width: w }
    return (
      <div className='columns' id='pool' style={style} onClick={this.clear} onMouseMove={(e) => { this.ripple(e.pageX, e.pageY) }}>
        <div className='column is-1'>
          <button id='redBut' className='button is-large' onClick={() => this.changeCol('red')}>RED</button>
          <button id='greenBut' className='button is-large' onClick={() => this.changeCol('green')}>GREEN</button>
          <button id='blueBut' className='button is-large' onClick={() => this.changeCol('blue')}>BLUE</button>
          <button id='cyanBut' className='button is-large' onClick={() => this.changeCol('cyan')}>CYAN</button>
          <button id='yellowBut' className='button is-large' onClick={() => this.changeCol('yellow')}>YELLOW</button>
          <button id='pinkBut' className='button is-large' onClick={() => this.changeCol('pink')}>PINK</button>
          <button id='orangeBut' className='button is-large' onClick={() => this.changeCol('orange')}>ORANGE</button>
          <br />
          <br />
          <h1 className='subtitle is-4'>SIZE: </h1>
          <button className='button' onClick={() => this.sizeChange(5)}>+</button>
          <button className='button' onClick={() => this.sizeChange(-5)}>-</button>
        </div>
        <svg style={style}>
          {sx.map((x, i) => <circle key={i} cx={x - 80} cy={sy[i]} r={r * (i * 0.5)} stroke={col} fill={col} strokeOpacity={0.5} strokeWidth={5} fillOpacity={0.3} />)}
        </svg>
      </div>
    )
  }
}
export default Pool
