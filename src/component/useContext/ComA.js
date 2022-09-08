import React, { createContext, useContext } from 'react'
import ComB from './ComB'

const BioData = createContext();

const ComA = () => {
    return (

        <BioData.Provider value={"Kumar Shashank"}>
            <ComB />
        </BioData.Provider>
    )
}

export default ComA
export { BioData }


// useContext

// 1. createContext
// 2. contextName.Provider
// 3. useContext