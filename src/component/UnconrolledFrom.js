import React,{ useRef, useState } from 'react'

const UnconrolledFrom = () => {

    //it like a useState only, and its preserve the value.  NO re-render
    const myName = useRef(null);
    const [show, setShow] = useState(false);

    const SubmitForm = (e) => {
        e.preventDefault();
        
        const name = myName.current.value;
        (name === "") ? alert("plz fill the data") : setShow(true);
    }

    return (
        <div>
            <form action='' onSubmit={SubmitForm}>
                <div>
                    <label> Enter Your Name </label>
                    <input type='text' id='myName' ref={ myName } />
                </div>
                <button> Submit </button>
            </form>
            <p> { (show) ? `Your Name is ${myName.current.value}` : '' }  </p>
        </div>
    )
}

export default UnconrolledFrom