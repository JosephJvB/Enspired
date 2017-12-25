import React from 'react'

const Pallet = (props) => {
  return (
    <div>
      <button id='redBut' className='button is-large' onClick={() => props.cc('red')}></button>
      <button id='greenBut' className='button is-large' onClick={() => props.cc('green')}></button>
      <button id='blueBut' className='button is-large' onClick={() => props.cc('blue')}></button>
      <button id='cyanBut' className='button is-large' onClick={() => props.cc('cyan')}></button>
      <button id='yellowBut' className='button is-large' onClick={() => props.cc('yellow')}></button>
      <button id='pinkBut' className='button is-large' onClick={() => props.cc('pink')}></button>
      <button id='orangeBut' className='button is-large' onClick={() => props.cc('orange')}></button>
      <button id='blackBut' className='button is-large' onClick={() => props.cc('black')}></button>
      <button id='purpleBut' className='button is-large' onClick={() => props.cc('purple')}></button>
      <br />
      <br />
      <h1 className='subtitle is-4'>SIZE: </h1>
      <button className='button' onClick={() => props.size(5)}>+</button>
      <button className='button' onClick={() => props.size(-5)}>-</button>
    </div>
  )
}

export default Pallet
