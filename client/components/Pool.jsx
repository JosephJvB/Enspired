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
      fillO: 0
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
  }

  antiPulse () {
    const { saved } = this.state
    const newSave = saved.map(arr => arr.map(dot => {
      const newDot = { x: dot.x, y: dot.y, r: dot.r - 10, fillO: dot.fillO, strokeCol: dot.strokeCol, fillCol: dot.fillCol }
      return newDot
    })
    )
    this.setState({ saved: newSave })
  }

  prepPulse () {
    console.log(this.state.pulse)
    console.log('pulse!')
    setInterval(this.pulse, 50)
    setTimeout(() => setInterval(this.antiPulse, 50), 1000)
  }

  pulse () {
    const { saved } = this.state
    const newSave = saved.map(arr => arr.map(dot => {
      const newDot = { x: dot.x, y: dot.y, r: dot.r + 10, fillO: dot.fillO, strokeCol: dot.strokeCol, fillCol: dot.fillCol }
      return newDot
    })
    )
    this.setState({ saved: newSave })
  }

  clear () {
    this.setState({ saved: [], sx: [], sy: [] })
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
        if (c === null) this.setState({ fillO: 0 })
        if (c !== null) this.setState({ fillO: 0.2 })
        this.setState({ fillCol: c })
        break
      default:
    }
  }

  sizeChange (v) {
    this.setState({ r: this.state.r + v })
  }

  render () {
    const { sx, sy, r, fillCol, strokeCol, fillO, saved } = this.state
    const { h, w } = this.props
    const style = { height: h, width: w }
    return (
      <div className='columns' id='pool' style={style} onMouseMove={(e) => { this.ripple(e.pageX, e.pageY) }}>
        <div className='column is-1' onMouseMove={() => this.setState({ sx: [], sy: [] })}>
          <Pallet cc={this.changeCol} size={this.sizeChange} clear={this.clear} undo={this.undo} side='f'/>
        </div>
        <svg style={style} onClick={this.save}>
          {sx.map((x, i) => <Ripple key={i} x={x - 90} y={sy[i] + 10} r={r * (i * 0.5)} fc={fillCol} sc={strokeCol} fo={fillO} />)}
          {saved.length > 0 && saved.map(arr => arr.map((dot, i) => <Ripple key={i} x={dot.x - 90} y={dot.y + 10} r={dot.r * (i * 0.5)} fc={dot.fillCol} sc={dot.strokeCol} fo={dot.fillO} />))}
        </svg>
        <div className='column is-1' onMouseMove={() => this.setState({ sx: [], sy: [] })}>
          <Pallet cc={this.changeCol} size={this.sizeChange} clear={this.clear} undo={this.undo} side='s'/>
        </div>
      </div>
    )
  }
}
export default Pool
