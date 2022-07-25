import React, { useState } from 'react'

function UseStateArray() {
    const data = [
        {
            id: 0, name: 'Kumar', age: 21
        },
        {
            id: 1, name: 'Shashank', age: 22
        }
    ]

    const [arrayData, setArrayData] = useState(data);

    const clearArray = () => {
        setArrayData([]);
    }

    return (
        <>
            {
                arrayData.map((dataEle) => <h3 key={dataEle.id}>  Name : {dataEle.name} and Age: {dataEle.age}  </h3>)
            }
            <button onClick={clearArray} >Clear</button>

        </>
    )
}

export default UseStateArray