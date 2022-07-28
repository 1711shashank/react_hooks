import React, { useEffect, useState } from 'react'

function UseEffect2() {

    const [widthSize, setWidthSize] = useState(window.screen.width);

    const actualWidth = () => {
        setWidthSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", actualWidth);

        return (() => { window.removeEventListener("resize", actualWidth); });
    });


    return (
        <>
            <h3> Window Width Size {widthSize} </h3>
        </>
    )
}

export default UseEffect2