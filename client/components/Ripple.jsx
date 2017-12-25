import React from 'react'

class Ripple extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      r: this.props.r
    }
    // this.embiggen = this.embiggen.bind(this)
  }

  // componentDidMount () {
  //   this.embiggen(this.props.r)
  // }

  // embiggen (r) {
  //   setInterval(this.setState({ r: r * 1.4 }), 10)
  //   console.log(this.state.r)
  // }

  render () {
    const { x, y, c, r } = this.props
    return (
      <circle cx={x} cy={y} r={r} stroke={c} fill={c} strokeOpacity={0} fillOpacity={0.2} />
    )
  }
}

export default Ripple
