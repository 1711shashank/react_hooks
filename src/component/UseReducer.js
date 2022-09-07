import React, {useReducer} from 'react'

const initialState = 0;

const reducer = (state, action) => {
    console.log(state);
    console.log(action);

    if(action.type === "INCREMENT") state++;
    if(action.type === "DECREMENT") state--;

    return state;
}

function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>{state}</p>
            <button onClick={() => dispatch({type: "INCREMENT"})}> Inc </button>
            <button onClick={() => dispatch({type: "DECREMENT"})}> Dec </button>
        </>
    )
}

export default UseReducer