import React, { useState } from 'react'

function UseStateObject() {
  const initialData = { name: 'Kumar', age: 22 }

  const [objData, setObjData] = useState(initialData);

  const changeName = (e) => {
    e.preventDefault();
    setObjData({ ...objData, name: 'Shashank' });
  }

  return (
    <>
      <form>
        <h3>  Name : {objData.name} and Age: {objData.age}  </h3>
        <button onClick={changeName}>Change Name</button>
      </form>
    </>
  )
}

export default UseStateObject