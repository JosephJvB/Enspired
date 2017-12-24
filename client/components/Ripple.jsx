import React from 'react'

class Ripple extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: { height: 2, width: 2 }
    }
    this.styleChange = this.styleChange.bind(this)
  }

  componentDidMount () {
    this.styleChange(1)
  }

  styleChange (num) {
    if (num === 8) return this.setState({ style: { height: 0, width: 0 } })
    let v = 20 * num
    setTimeout(() => this.styleChange(num + 1), 300)
    console.log('style', this.state.style)
    this.setState({ style: { height: v, width: v } })
  }

  render () {
    return (
      <div className='ripple' style={this.state.style}>
        am ripple
      </div>
    )
  }
}

export default Ripple
