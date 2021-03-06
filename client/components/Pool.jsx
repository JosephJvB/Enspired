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
      fillCol: null,
      strokeCol: 'white',
      fillO: 0,
      backCol: null
    }
    this.ripple = this.ripple.bind(this)
    this.clear = this.clear.bind(this)
    this.changeCol = this.changeCol.bind(this)
    this.sizeChange = this.sizeChange.bind(this)
    this.save = this.save.bind(this)
    this.undo = this.undo.bind(this)
    this.pulse = this.pulse.bind(this)
    this.prepPulse = this.prepPulse.bind(this)
    this.antiPulse = this.antiPulse.bind(this)
    this.setBack = this.setBack.bind(this)
  }

  setBack (c) {
    this.setState({ backCol: c })
  }

  antiPulse (num) {
    const { saved } = this.state
    const newSave = saved.map(arr => arr.map(dot => {
      const newDot = { x: dot.x, y: dot.y, r: dot.r - 10, fillO: dot.fillO, strokeCol: dot.strokeCol, fillCol: dot.fillCol }
      return newDot
    })
    )
    if (num === 30) return
    this.setState({ saved: newSave })
    setTimeout(() => this.antiPulse(num + 1), 50)
  }

  prepPulse () {
    this.pulse(0)
    setTimeout(() => this.antiPulse(0), 2000)
    setTimeout(this.clear, 3700)
  }

  pulse (num) {
    const { saved } = this.state
    const newSave = saved.map(arr => arr.map(dot => {
      const newDot = { x: dot.x, y: dot.y, r: dot.r + 10, fillO: dot.fillO, strokeCol: dot.strokeCol, fillCol: dot.fillCol }
      return newDot
    })
    )
    if (num === 30) return
    this.setState({ saved: newSave })
    setTimeout(() => this.pulse(num + 1), 50)
  }

  clear () {
    this.setState({ saved: [], sx: [], sy: [], strokeCol: 'white', r: 10, backCol: null })
  }

  undo () {
    const { saved } = this.state
    this.setState({ saved: saved.slice(0, saved.length - 1) })
  }

  save () {
    const { sx, sy, saved, fillCol, strokeCol, r, fillO } = this.state
    const dots = sx.map((x, i) => {
      let newDot = { x, y: sy[i], fillCol, strokeCol, r, fillO }
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

  changeCol (c, side) {
    switch (side) {
      case 's':
        this.setState({ strokeCol: c })
        if (c === 'lol') return this.prepPulse()
        break
      case 'f':
        this.setState({ fillCol: c })
        if (c === 'lol') return this.setState({ backCol: null })
        if (c === null) return this.setState({ fillO: 0 })
        if (c !== null && this.state.fillO === 0) return this.setState({ fillO: 0.2 })
        break
      default:
    }
  }

  sizeChange (v, side) {
    switch (side) {
      case 's':
        this.setState({ r: this.state.r + v })
        if (this.state.r + v >= 30) return this.setState({ r: 30 })
        if (this.state.r + v <= 0) return this.setState({ r: 1 })
        break
      case 'f':
        this.setState({ fillO: this.state.fillO + v * 0.05 })
        if (this.state.fillO + v * 0.05 >= 1) return this.setState({ fillO: 1 })
        if (this.state.fillO + v * 0.05 <= 0) return this.setState({ fillO: 0 })
        break
      default:
    }
  }

  render () {
    const { sx, sy, r, fillCol, strokeCol, fillO, saved, backCol } = this.state
    const { h, w } = this.props
    const style = { height: h, width: w, backgroundColor: backCol }
    return (
      <div className='columns' id='pool' style={style} onMouseMove={(e) => { this.ripple(e.pageX, e.pageY) }}>
        <div className='column is-1' onMouseMove={() => this.setState({ sx: [], sy: [] })}>
          <Pallet sb={this.setBack} cc={this.changeCol} size={this.sizeChange} clear={this.clear} undo={this.undo} fill={fillO} side='f'/>
        </div>
        <svg style={style} onClick={this.save}>
          {sx.map((x, i) => <Ripple key={i} x={x - 90} y={sy[i] + 10} r={r * (i * 0.5)} fc={fillCol} sc={strokeCol} fo={fillO} />)}
          {saved.length > 0 && saved.map(arr => arr.map((dot, i) => <Ripple key={i} x={dot.x - 90} y={dot.y + 10} r={dot.r * (i * 0.5)} fc={dot.fillCol} sc={dot.strokeCol} fo={dot.fillO} />))}
        </svg>
        <div className='column is-1' onMouseMove={() => this.setState({ sx: [], sy: [] })}>
          <Pallet sb={this.setBack} cc={this.changeCol} size={this.sizeChange} clear={this.clear} undo={this.undo} r={r} side='s'/>
        </div>
      </div>
    )
  }
}
export default Pool
