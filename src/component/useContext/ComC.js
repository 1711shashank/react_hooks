import React, { useContext } from 'react'
import { BioData } from './ComA'

const ComC = () => {
    const myName = useContext(BioData);
    return (
        <>
            <h3> Passing the props from ComA to ComC directely with the hellp of useContext Hook</h3>
            <p> {myName} </p>
        </>
    )
}

export default ComC