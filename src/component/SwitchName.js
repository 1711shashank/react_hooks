import React, { useState } from 'react'

function SwitchName() {

  const [name, setName] = useState('Kumar');

  const changeName = () => {
    name === 'Kumar' ? setName('Shashank') : setName('Kumar');
  }

  return (
    <>
      <h2>{name}</h2>
      <button onClick={changeName}> click me </button>
    </>
  )
}

export default SwitchName