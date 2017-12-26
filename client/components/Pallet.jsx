import React from 'react'

const Pallet = (props) => {
  return (
    <div id='pallet'>
      <button id='redBut' className='button is-large' onClick={() => props.cc('red', props.side)}></button>
      <button id='greenBut' className='button is-large' onClick={() => props.cc('green', props.side)}></button>
      <button id='blueBut' className='button is-large' onClick={() => props.cc('blue', props.side)}></button>
      <button id='cyanBut' className='button is-large' onClick={() => props.cc('cyan', props.side)}></button>
      <button id='yellowBut' className='button is-large' onClick={() => props.cc('yellow', props.side)}></button>
      <button id='pinkBut' className='button is-large' onClick={() => props.cc('pink', props.side)}></button>
      <button id='orangeBut' className='button is-large' onClick={() => props.cc('orange', props.side)}></button>
      <button id='brownBut' className='button is-large' onClick={() => props.cc('rgb(143, 74, 22)', props.side)}></button>
      <button id='purpleBut' className='button is-large' onDoubleClick={() => props.cc('lol', props.side)} onClick={() => props.cc('purple', props.side)}></button>
      <button id='blackBut' className='button is-large' onClick={() => props.cc('black', props.side)}></button>
      <button id='whiteBut' className='button is-large' onClick={() => props.cc('white', props.side)}></button>
      <button id='offBut' className='button is-large' onClick={() => props.cc(null, props.side)}>OFF</button>
      <br />
      <br />
      <button id='plusBut' className='button' onClick={() => props.size(2, props.side)}>+</button>
      <button id='minusBut' className='button' onClick={() => props.size(-2, props.side)}>-</button>
      {props.side === 'f' && <p>OPACITY: {Math.ceil(props.fill * 10)}</p>}
      {props.side === 's' && <p>RADIUS: {props.r}</p>}
      <br />
      <button id='deleteBut' className='button is-large is-success' onClick={() => props.undo()}>U</button>
      <button id='deleteBut' className='button is-large is-danger' onClick={() => props.clear()}>X</button>
    </div>
  )
}

export default Pallet
