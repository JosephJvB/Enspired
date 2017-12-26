import React from 'react'

class Ripple extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      r: this.props.r
    }
    // this.embiggen = this.embiggen.bind(this)
  }

  // embiggen (r) {
  //   setInterval(this.setState({ r: r * 1.4 }), 10)
  //   console.log(this.state.r)
  // }

  render () {
    const { x, y, fc, sc, r, fo } = this.props
    return (
      <circle cx={x} cy={y} r={r} stroke={sc} fill={fc} strokeOpacity={1} fillOpacity={fo} />
    )
  }
}

export default Ripple
