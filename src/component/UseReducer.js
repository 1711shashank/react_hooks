import React, { useReducer } from 'react'
import useTitleCount from './useTitleCount';


const initialState = 0;

const reducer = (state, action) => {
    console.log(state, action);

    if (action.type === "INCREMENT") state++;
    if (action.type === "DECREMENT") state--;

    return state;
}

function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

    useTitleCount(state);

    return (
        <>
            <p>{state}</p>
            <button onClick={() => dispatch({ type: "DECREMENT" })}> Dec </button>
            <button onClick={() => dispatch({ type: "INCREMENT" })}> Inc </button>
        </>
    )
}

export default UseReducer