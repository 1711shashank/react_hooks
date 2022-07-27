import React, { useState, useEffect } from 'react'

function UseEffect1() {
    const [count, setCount] = useState(0);

    // first time useEffect will load 

    // any change in useState will re-render our component 
    // component re-render => useEffect re-render

    useEffect(() => {
        if (count) {
            document.title = `Click Count (${count})`;
        }
        else {
            document.title = `Click Count`;
        }

    });

    return (
        <div>
            <h3> {count} </h3>
            <button onClick={() => setCount(count + 1)}> Click me </button>

        </div>
    )
}

export default UseEffect1