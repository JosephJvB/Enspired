import React from 'react'

import Ripple from './Ripple'
import Pallet from './Pallet'

class Pool extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      saved: [],
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
    this.save = this.save.bind(this)
  }

  clear () {
    this.setState({ saved: [], sx: [], sy: [] })
  }

  save () {
    const { sx, sy, saved, col, r } = this.state
    const dots = sx.map((x, i) => {
      let newDot = { x, y: sy[i], col, r }
      return newDot
    })
    this.setState({ saved: [...saved, dots], sx: [], sy: [] })
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
    const { sx, sy, r, col, saved } = this.state
    const { h, w } = this.props
    const style = { height: h, width: w }
    return (
      <div className='columns' id='pool' style={style} onMouseMove={(e) => { this.ripple(e.pageX, e.pageY) }}>
        <div className='column is-1' onMouseMove={() => this.setState({ sx: [], sy: [] })}>
          <Pallet cc={this.changeCol} size={this.sizeChange} clear={this.clear} />
        </div>
        <svg style={style} onClick={this.save}>
          {sx.map((x, i) => <Ripple key={i} x={x - 90} y={sy[i] + 10} r={r * (i * 0.5)} c={col} />)}
          {saved.length > 0 && saved.map(arr => arr.map((dot, i) => <circle key={i} cx={dot.x - 90} cy={dot.y + 10} r={dot.r * (i * 0.5)} fill={dot.col} fillOpacity={0.2} />))}
        </svg>
      </div>
    )
  }
}
export default Pool
