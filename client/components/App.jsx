import React from 'react'

import { getTea } from '../tearoom'

const App = () => {
  return (
    <div className='app'>
      <h1>owo what's this</h1>
      <button onClick={() => getTea()}>i'd love a cuppa thanks</button>
    </div>
  )
}

export default App
