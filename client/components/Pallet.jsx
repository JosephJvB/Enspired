import React from 'react'

const Pallet = (props) => {
  return (
    <div id='pallet'>
      <button id='redBut' className='button is-large' onDoubleClick={() => props.sb('red')} onClick={() => props.cc('red', props.side)}></button>
      <button id='greenBut' className='button is-large' onDoubleClick={() => props.sb('rgb(0, 177, 0)')} onClick={() => props.cc('rgb(0, 177, 0)', props.side)}></button>
      <button id='blueBut' className='button is-large' onDoubleClick={() => props.sb('blue')} onClick={() => props.cc('blue', props.side)}></button>
      <button id='cyanBut' className='button is-large' onDoubleClick={() => props.sb('cyan')} onClick={() => props.cc('cyan', props.side)}></button>
      <button id='yellowBut' className='button is-large' onDoubleClick={() => props.sb('yellow')} onClick={() => props.cc('yellow', props.side)}></button>
      <button id='pinkBut' className='button is-large' onDoubleClick={() => props.sb('rgb(253, 156, 177)')} onClick={() => props.cc('rgb(253, 156, 177)', props.side)}></button>
      <button id='orangeBut' className='button is-large' onDoubleClick={() => props.sb('orange')} onClick={() => props.cc('orange', props.side)}></button>
      <button id='brownBut' className='button is-large' onDoubleClick={() => props.sb('rgb(143, 74, 22)')} onClick={() => props.cc('rgb(143, 74, 22)', props.side)}></button>
      <button id='purpleBut' className='button is-large' onDoubleClick={() => props.sb('rgb(174, 0, 255)')} onClick={() => props.cc('rgb(174, 0, 255)', props.side)}></button>
      <button id='blackBut' className='button is-large' onDoubleClick={() => props.sb('black')} onClick={() => props.cc('black', props.side)}></button>
      <button id='whiteBut' className='button is-large' onDoubleClick={() => props.sb('white')} onClick={() => props.cc('white', props.side)}></button>
      <button id='offBut' className='button is-large' onDoubleClick={() => props.cc('lol', props.side)} onClick={() => props.cc(null, props.side)}>OFF</button>
      <br />
      <br />
      <button id='plusBut' className='button' onClick={() => props.size(2, props.side)}>+</button>
      <button id='minusBut' className='button' onClick={() => props.size(-2, props.side)}>-</button>
      {props.side === 'f' && <p>OPACITY: {Math.ceil(props.fill * 10)}</p>}
      {props.side === 's' && <p>RADIUS: {props.r}</p>}
      <br />
      {props.side === 'f' && <button id='deleteBut' className='button is-large is-success' onClick={() => props.undo()}>undo</button>}
      {props.side === 's' && <button id='deleteBut' className='button is-large is-danger' onClick={() => props.clear()}>clear</button>}
    </div>
  )
}

export default Pallet
