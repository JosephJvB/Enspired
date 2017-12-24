import React from 'react'

import Pool from './Pool'

const App = () => {
  return (
    <div className='app'>
      <Pool h={window.screen.availHeight} w={window.screen.availWidth} />
    </div>
  )
}

export default App
