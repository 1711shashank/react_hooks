import React, { useState, useEffect } from 'react'
import useTitleCount from './useTitleCount';

function UseEffect1() {
    const [count, setCount] = useState(0);

    // first time useEffect will load 

    // any change in useState will re-render our component 
    // component re-render => useEffect re-render

    //custom Hook
    useTitleCount(count);

    // useEffect Dependency
    // this useEffect will re-render only when count useState will change => useState written inside the [count], => if empty then re-render only once (at time of page refresh)
    // any change in any other useEffect will not re-render this useEffect


    return (
        <div>
            <h3> {count} </h3>
            <button onClick={() => setCount(count + 1)}> Click me </button>
        </div>
    )
}

export default UseEffect1